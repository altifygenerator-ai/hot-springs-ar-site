import Link from "next/link";
import QuickImportForm from "@/components/events/QuickImportForm";

export const dynamic = "force-dynamic";

export default function ImportEventPage() {
  return (
    <section>
      <div className="container">
        <div className="admin-heading">
          <div>
            <p className="hero-eyebrow">Admin</p>
            <h1>Quick Import Event</h1>
            <p>
              Paste event text from Facebook, a flyer, email, or venue post. It
              saves as pending so you can review it before publishing.
            </p>
          </div>

          <Link href="/admin/events" className="btn-secondary">
            Back to Events
          </Link>
        </div>

        <QuickImportForm />
      </div>
    </section>
  );
}
