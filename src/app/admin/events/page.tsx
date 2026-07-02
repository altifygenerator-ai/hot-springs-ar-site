import Link from "next/link";
import AdminEventTable from "@/components/events/AdminEventTable";
import { getAllEventsForAdmin } from "@/lib/events";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function AdminEventsPage() {
  const events = await getAllEventsForAdmin();

  return (
    <section>
      <div className="container">
        <div className="admin-heading">
          <div>
            <p className="hero-eyebrow">Admin</p>
            <h1>Manage Events</h1>
            <p>
              Review pending submissions and approve events before they show on
              the public Hot Springs events pages.
            </p>
          </div>

          <div className="admin-row-actions">
            <Link href="/admin/events/import" className="btn-primary">
              Quick Import
            </Link>
            <Link href="/admin/events/sources" className="btn-secondary">
              Event Sources
            </Link>
            <Link href="/admin/events/new" className="btn-secondary">
              Add Event
            </Link>
          </div>
        </div>

        <AdminEventTable events={events} />
      </div>
    </section>
  );
}