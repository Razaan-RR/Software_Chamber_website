function FAQ() {
  return (
    <section className="bg-white text-black py-16 text-center">
      <h2 className="text-3xl font-bold mb-6">Comprehensive Answers to the Most Common Questions</h2>
      <div className="space-y-4 max-w-2xl mx-auto text-left">
        <details className="border rounded p-4">
          <summary>What development services do you offer?</summary>
          <p>We offer web, mobile, SaaS and backend development.</p>
        </details>
        <details className="border rounded p-4">
          <summary>Which industries do you specialize in?</summary>
          <p>Startups, healthcare, e-commerce, fintech and more.</p>
        </details>
        <details className="border rounded p-4">
          <summary>How do you ensure code quality?</summary>
          <p>Thorough testing, code reviews, and automation.</p>
        </details>
      </div>
    </section>
  )
}

export default FAQ
