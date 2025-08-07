function ContactForm() {
  return (
    <section className="bg-white text-black py-16 text-center">
      <h2 className="text-2xl font-bold mb-4">Let’s talk about your next project. We’re here to help.</h2>
      <div className="max-w-md mx-auto text-left">
        <form className="space-y-4">
          <input type="text" placeholder="Name" className="w-full border p-2" />
          <input type="email" placeholder="Email" className="w-full border p-2" />
          <textarea placeholder="Message" className="w-full border p-2 h-32" />
          <button className="bg-[#00D2FF] text-black px-6 py-2 rounded">Send</button>
        </form>
      </div>
    </section>
  )
}

export default ContactForm
