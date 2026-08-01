function Hero() {
  return (
    <section className="min-h-[85vh] bg-slate-900 text-white flex flex-col justify-center items-center px-6 text-center">

      <h1 className="text-6xl font-extrabold mb-6">
        CAD Collaboration
        <span className="text-cyan-400"> Made Simple.</span>
      </h1>

      <p className="text-xl text-slate-400 max-w-3xl">
        Store, version, and collaborate on CAD projects
        with your engineering team from anywhere.
      </p>

      <div className="flex gap-5 mt-10">
        <button className="bg-cyan-500 hover:bg-cyan-600 px-8 py-3 rounded-lg font-semibold transition">
          Get Started
        </button>

        <button className="border border-slate-600 px-8 py-3 rounded-lg hover:bg-slate-800 transition">
          Learn More
        </button>
      </div>

    </section>
  );
}

export default Hero;