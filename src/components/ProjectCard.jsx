import { Github, ExternalLink } from "lucide-react";

export default function ProjectCard({
  image,
  title,
  description,
  github,
  live,
}) {
  return (
    <div className="rounded-xl border border-slate-200 overflow-hidden bg-white hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
      
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-semibold text-slate-900">
          {title}
        </h3>

        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          {description}
        </p>

        {/* Links */}
        <div className="mt-4 flex gap-6">
          <a
            href={github}
            target="_blank"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition"
          >
            <Github size={18} />
            GitHub
          </a>

          <a
            href={live}
            target="_blank"
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-indigo-600 transition"
          >
            <ExternalLink size={18} />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
