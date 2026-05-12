const faqs = [
  {
    question: "What is Hot Springs, Arkansas known for?",
    answer:
      "Hot Springs is known for Bathhouse Row, Hot Springs National Park, natural thermal water, Oaklawn, Lake Hamilton, historic downtown, spas, hiking trails, and Arkansas getaway trips.",
  },
  {
    question: "Is Hot Springs worth visiting?",
    answer:
      "Yes. Hot Springs is one of Arkansas’ most popular visitor destinations because it offers history, outdoor recreation, restaurants, lake access, spas, hotels, cabins, and family-friendly attractions in one area.",
  },
  {
    question: "What are the best things to do in Hot Springs?",
    answer:
      "Popular things to do include walking Bathhouse Row, visiting Hot Springs National Park, exploring Garvan Woodland Gardens, spending time on Lake Hamilton, visiting Oaklawn, hiking trails, and eating downtown.",
  },
  {
    question: "Where should I stay in Hot Springs?",
    answer:
      "Visitors often stay downtown near Bathhouse Row, near Oaklawn, around Lake Hamilton, or in cabins and vacation rentals outside the busiest parts of town.",
  },
];

export default function FAQSection() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <h2>Hot Springs Travel FAQs</h2>
          <p>
            A few quick answers for visitors planning a Hot Springs weekend,
            lake trip, family vacation, or downtown stay.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((item) => (
            <div key={item.question} className="card p-6">
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}