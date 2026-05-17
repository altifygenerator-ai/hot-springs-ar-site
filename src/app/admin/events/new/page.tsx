import EventForm from "@/components/events/EventForm";

export default function NewAdminEventPage() {
  return (
    <section>
      <div className="container">
        <div className="section-heading">
          <p className="hero-eyebrow">Admin</p>
          <h1>Add Event Manually</h1>
          <p>
            Add an event directly from the admin side. It will save as pending
            first so you can review and approve it.
          </p>
        </div>

        <EventForm sourceType="manual" />
      </div>
    </section>
  );
}