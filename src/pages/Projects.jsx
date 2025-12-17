import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  return (
    <main className="pb-24">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="mb-14">
          <p className="text-slate-500 text-sm uppercase tracking-widest">
            Some of my recent work
          </p>
          <h1 className="mt-2 text-4xl font-extrabold text-slate-900">
            Projects
          </h1>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          
          <ProjectCard
            image="https://via.placeholder.com/600x400"
            title="Book Store MERN App"
            description="A full-stack MERN application with CRUD operations and a secure admin panel."
            github="https://github.com/your-username/book-store-mern-app"
            live="https://book-store-demo.vercel.app"
          />

          <ProjectCard
            image="https://via.placeholder.com/600x400"
            title="Developer Portfolio"
            description="A professional portfolio website built using React, Vite, and Tailwind CSS."
            github="https://github.com/your-username/portfolio"
            live="https://portfolio-demo.vercel.app"
          />

          <ProjectCard
            image="https://via.placeholder.com/600x400"
            title="Upcoming Project"
            description="More projects currently in development."
            github="#"
            live="#"
          />

        </div>
      </div>
    </main>
  );
}
