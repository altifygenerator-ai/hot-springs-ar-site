import Link from "next/link";

export default function AdminPage() {
  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <p className="hero-eyebrow">Admin</p>
          <h1>Hot Springs Events Admin</h1>
          <p>
            Review submitted events, manually add new ones, and approve events
            before they appear publicly.
          </p>
        </div>

        <div className="admin-actions">
          <Link href="/admin/events" className="btn-primary">
            Manage Events
          </Link>

          <Link href="/admin/events/new" className="btn-secondary">
            Add Event Manually
          </Link>
        </div>
      </div>
    </section>
  );
}