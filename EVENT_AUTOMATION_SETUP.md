# Event Automation Setup

This build adds a semi-automated event importer for the Hot Springs site.
Imported events are never public automatically. They save as `pending`, then you review/edit/approve them in `/admin/events`.

## 1. Run Supabase SQL

Open Supabase → SQL Editor and run:

```txt
supabase/event-automation-update.sql
```

That adds:

- `event_sources`
- `event_import_runs`
- import/dedupe columns on `events`
- indexes for source hash, event status/date, and import logs

## 2. Add env vars

Vercel and local `.env.local` need:

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
ADMIN_EMAIL=
OPENAI_API_KEY=
CRON_SECRET=make-a-long-random-string
RESEND_API_KEY=
```

`OPENAI_API_KEY` is used for website text extraction and Quick Paste Import.
`CRON_SECRET` protects `/api/cron/import-events`.

## 3. New admin routes

```txt
/admin/events
/admin/events/import
/admin/events/sources
/admin/events/[id]/edit
```

## 4. New API routes

```txt
/api/cron/import-events
/api/events/import/run
/api/events/import/paste
/api/events/sources
/api/events/sources/[id]
/api/events/[id]
```

Existing approve and clean routes now require admin auth.

## 5. Event source types

- `ics` for public iCal feeds
- `rss` for RSS feeds
- `json_ld` for pages with Event schema
- `website` for regular pages. It tries JSON-LD first, then AI extraction from visible page text.

## 6. Vercel cron

`vercel.json` runs the importer once daily:

```json
{
  "crons": [
    {
      "path": "/api/cron/import-events",
      "schedule": "0 11 * * *"
    }
  ]
}
```

## 7. Workflow

1. Add trusted event sources in `/admin/events/sources`.
2. Run them manually or let Vercel cron check daily.
3. Imported events save as `pending`.
4. Review each event in `/admin/events/[id]/edit`.
5. Click Save & Approve when ready.
