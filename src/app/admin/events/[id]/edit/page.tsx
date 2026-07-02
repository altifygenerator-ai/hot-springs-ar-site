import Link from "next/link";
import { notFound } from "next/navigation";
import EventEditForm from "@/components/events/EventEditForm";
import { getEventForAdmin } from "@/lib/events";

type EditEventPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function EditEventPage({ params }: EditEventPageProps) {
  const { id } = await params;
  const event = await getEventForAdmin(id);

  if (!event) notFound();

  return (
    <section>
      <div className="container">
        <div className="admin-heading">
          <div>
            <p className="hero-eyebrow">Admin</p>
            <h1>Edit Event</h1>
            <p>
              Clean up the imported details, confirm the date and location, then
              approve when it is ready to publish.
            </p>
          </div>

          <Link href="/admin/events" className="btn-secondary">
            Back to Events
          </Link>
        </div>

        <EventEditForm event={event} />
      </div>
    </section>
  );
}
