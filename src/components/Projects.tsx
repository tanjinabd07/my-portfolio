import Link from "next/link";

const projects = [
  {
    title: "Bazar Dor",
    slug: "bazar-dor",
    category: "Frontend Development",
    description:
      "A Bangla-based market price website where users can explore daily product prices, categories, and price changes.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "BookNook",
    slug: "booknook",
    category: "Full-Stack Development",
    description:
      "A full-stack book management website where users can manage books with backend API integration and MongoDB database.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-full bg-[#111827] px-6 py-24 text-white sm:px-10 md:px-14 lg:px-20 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
            My Recent Work
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            My <span className="text-purple-400">Projects</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-purple-500" />
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="rounded-2xl border border-gray-700 bg-[#0b1120] p-7 transition hover:-translate-y-2 hover:border-purple-500 sm:p-9"
            >
              <div className="mb-6 flex h-40 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600/30 to-indigo-600/30">
                <span className="text-4xl font-bold text-purple-300">
                  {project.title}
                </span>
              </div>

              <p className="mb-3 text-sm font-semibold text-purple-400">
                {project.category}
              </p>

              <h3 className="mb-4 text-2xl font-bold">{project.title}</h3>

              <p className="mb-6 leading-7 text-gray-400">
                {project.description}
              </p>

              <div className="mb-7 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-purple-500/30 bg-purple-500/10 px-3 py-1.5 text-sm text-purple-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <Link
                href={`/projects/${project.slug}`}
                className="inline-block rounded-full bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-700"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
