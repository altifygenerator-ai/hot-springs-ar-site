-- Hot Springs event automation update
-- Run this in Supabase SQL Editor before deploying the new event importer routes.

create extension if not exists pgcrypto;

create table if not exists public.event_sources (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  source_type text not null default 'website' check (source_type in ('ics', 'rss', 'json_ld', 'website')),
  url text not null,
  city text default 'Hot Springs',
  category_hint text,
  venue_hint text,
  enabled boolean not null default true,
  last_checked_at timestamptz,
  last_status text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.event_import_runs (
  id uuid primary key default gen_random_uuid(),
  source_id uuid references public.event_sources(id) on delete set null,
  status text not null default 'running' check (status in ('running', 'success', 'error')),
  started_at timestamptz not null default now(),
  finished_at timestamptz,
  found_count integer not null default 0,
  inserted_count integer not null default 0,
  skipped_count integer not null default 0,
  error_message text
);

alter table public.events
  add column if not exists ai_summary text,
  add column if not exists source_id uuid references public.event_sources(id) on delete set null,
  add column if not exists source_hash text,
  add column if not exists imported_at timestamptz,
  add column if not exists source_type text,
  add column if not exists external_id text,
  add column if not exists confidence_score numeric,
  add column if not exists needs_review boolean default true,
  add column if not exists raw_description text,
  add column if not exists image_url text,
  add column if not exists tags text[] default '{}',
  add column if not exists is_recurring boolean default false,
  add column if not exists recurrence_type text,
  add column if not exists recurrence_days text[] default '{}',
  add column if not exists recurrence_end_date date;

create unique index if not exists events_source_hash_unique_idx
  on public.events(source_hash)
  where source_hash is not null;

create index if not exists events_status_start_date_idx
  on public.events(status, start_date);

create index if not exists events_source_id_idx
  on public.events(source_id);

create index if not exists event_sources_enabled_idx
  on public.event_sources(enabled);

create index if not exists event_import_runs_source_started_idx
  on public.event_import_runs(source_id, started_at desc);

alter table public.event_sources enable row level security;
alter table public.event_import_runs enable row level security;

-- No public RLS policies are added for event_sources or import runs.
-- The site uses SUPABASE_SERVICE_ROLE_KEY on protected admin/cron routes.

-- Optional starter sources. These are intentionally left disabled until you verify each URL.
-- Replace URLs with the exact public calendar/event pages you want to trust.
insert into public.event_sources (name, source_type, url, city, category_hint, enabled, notes)
values
  ('Oaklawn Events', 'website', 'https://www.oaklawn.com/events/', 'Hot Springs', 'Entertainment', false, 'Verify URL before enabling.'),
  ('Garvan Woodland Gardens Events', 'website', 'https://www.garvangardens.org/events/', 'Hot Springs', 'Arts & Culture', false, 'Verify URL before enabling.'),
  ('Magic Springs Events', 'website', 'https://www.magicsprings.com/', 'Hot Springs', 'Family Friendly', false, 'Verify exact events page before enabling.')
on conflict do nothing;
