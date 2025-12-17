import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT: TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Yogesh Kashyap
          </h1>

          <p className="mt-3 text-indigo-600 font-medium text-sm sm:text-base">
            MERN Stack Developer & Aspiring Full-Stack Engineer
          </p>

          <p className="mt-5 text-slate-600 text-sm sm:text-base max-w-xl mx-auto md:mx-0">
            I build responsive and scalable web applications using MongoDB,
            Express, React, and Node.js. I also practice Data Structures and
            Algorithms in C++ to write efficient and optimized solutions.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/projects"
              className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition text-center"
            >
              View Projects
            </a>

            <a
              href="/contact"
              className="px-6 py-3 rounded-lg border border-slate-300 text-slate-700 hover:border-indigo-600 hover:text-indigo-600 transition text-center"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT: IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-slate-100 border border-slate-300 shadow-md flex items-center justify-center text-slate-400 text-sm">
            Profile Photo
          </div>
        </motion.div>

      </div>
    </section>
  );
}
