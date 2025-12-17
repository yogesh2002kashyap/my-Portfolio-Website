export default function About() {
  return (
   <main className="pb-24">
  <div className="max-w-6xl mx-auto px-6">
    <h1 className="text-5xl font-extrabold text-slate-900">
      About me<span className="text-indigo-600">.</span>
    </h1>

    <p className="mt-6 max-w-2xl text-slate-600 text-lg">
      I specialize in building responsive and scalable web applications using
      the MERN stack, with a strong focus on clean UI and performance.
    </p>

    <div className="mt-16 grid md:grid-cols-2 gap-12">
      {/* Left: Stack */}
      <div>
        <h3 className="font-semibold text-slate-900 mb-4">
          My Stack
        </h3>
        {/* skills list */}
      </div>

      {/* Right: Visual / placeholder */}
      <div className="h-64 rounded-xl bg-slate-200" />
    </div>
  </div>
</main>

  );
}
