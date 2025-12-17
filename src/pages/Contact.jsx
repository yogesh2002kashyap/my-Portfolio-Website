import { Mail, Phone, Github, Linkedin } from "lucide-react";

export default function Contact() {
  return (
    <main className="pb-24">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <h1 className="text-5xl font-extrabold text-slate-900">
          Contact<span className="text-indigo-600">.</span>
        </h1>

        <p className="mt-6 text-slate-600 text-lg max-w-2xl">
          Feel free to reach out for opportunities, collaborations, or any
          questions. I’m always open to connecting.
        </p>

        {/* Contact Cards */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2">

          {/* Email */}
          <a
            href="mailto:yogesh2003kashyap@gmail.com"
            className="flex items-center gap-4 p-6 rounded-xl border border-slate-200 hover:border-indigo-600 hover:shadow-md transition"
          >
            <Mail className="text-indigo-600" size={28} />
            <div>
              <p className="font-medium text-slate-900">Email</p>
              <p className="text-slate-600">
                yogesh2003kashyap@gmail.com
              </p>
            </div>
          </a>

          {/* Phone */}
          <a
            href="tel:+919999999999"
            className="flex items-center gap-4 p-6 rounded-xl border border-slate-200 hover:border-indigo-600 hover:shadow-md transition"
          >
            <Phone className="text-indigo-600" size={28} />
            <div>
              <p className="font-medium text-slate-900">Phone</p>
              <p className="text-slate-600">
                +91 99999 99999
              </p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/yogesh2002kashyap"
            target="_blank"
            className="flex items-center gap-4 p-6 rounded-xl border border-slate-200 hover:border-indigo-600 hover:shadow-md transition"
          >
            <Github className="text-indigo-600" size={28} />
            <div>
              <p className="font-medium text-slate-900">GitHub</p>
              <p className="text-slate-600">
                github.com/yogesh2002kashyap
              </p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/yogesh-kashyap-dev"
            target="_blank"
            className="flex items-center gap-4 p-6 rounded-xl border border-slate-200 hover:border-indigo-600 hover:shadow-md transition"
          >
            <Linkedin className="text-indigo-600" size={28} />
            <div>
              <p className="font-medium text-slate-900">LinkedIn</p>
              <p className="text-slate-600">
                linkedin.com/in/yogesh-kashyap-dev
              </p>
            </div>
          </a>

        </div>
      </div>
    </main>
  );
}
