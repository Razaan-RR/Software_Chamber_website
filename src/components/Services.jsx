function Services() {
  return (
    <section className="bg-[#F8FAFC] text-black py-12">
      <div className="text-center text-3xl font-bold mb-8">Services</div>
      <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
        <div className="bg-white p-6 shadow rounded w-72">
          <h3 className="text-xl font-bold mb-2">Web & Mobile App Development</h3>
          <p>From MVP to production apps</p>
        </div>
        <div className="bg-white p-6 shadow rounded w-72">
          <h3 className="text-xl font-bold mb-2">Application Software Services</h3>
          <p>Tailored apps to solve unique business needs</p>
        </div>
        <div className="bg-white p-6 shadow rounded w-72">
          <h3 className="text-xl font-bold mb-2">Software Coding & Optimization</h3>
          <p>Improve code performance and quality</p>
        </div>
      </div>
    </section>
  )
}

export default Services
