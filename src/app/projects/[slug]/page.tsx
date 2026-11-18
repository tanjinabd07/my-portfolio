import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
  "bazar-dor": {
    title: "Bazar Dor",
    category: "Frontend Development",
    description:
      "Bazar Dor is a Bangla-based market price website that helps users explore daily market prices of essential products. Users can browse product categories and compare today's prices with previous prices.",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    challenges: [
      "Fetching and displaying product data from APIs.",
      "Organizing products by category.",
      "Creating a responsive layout for different devices.",
    ],
    improvements: [
      "Add user reviews and ratings.",
      "Improve search and filtering features.",
      "Add more market price information.",
    ],
    liveLink: "",
    githubLink: "https://github.com/tanjinabd07",
  },
  booknook: {
    title: "BookNook",
    category: "Full-Stack Development",
    description:
      "BookNook is a full-stack book management website. It allows users to manage book information through a frontend interface connected to a backend API and MongoDB database.",
    technologies: ["React", "Node.js", "Express.js", "MongoDB"],
    challenges: [
      "Connecting the frontend with backend APIs.",
      "Creating REST API endpoints for book management.",
      "Connecting the application with MongoDB Atlas.",
    ],
    improvements: [
      "Add advanced book search and filtering.",
      "Improve authentication and authorization.",
      "Add more book management features.",
    ],
    liveLink: "",
    githubLink: "https://github.com/tanjinabd07",
  },
};

type ProjectSlug = keyof typeof projects;

export default async function ProjectDetails({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (!(slug in projects)) {
    notFound();
  }

  const project = projects[slug as ProjectSlug];

  return (
    <main className="min-h-screen bg-[#0b1120] px-6 py-20 text-white sm:px-10 md:px-14 lg:px-20">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/#projects"
          className="mb-10 inline-block text-purple-400 transition hover:text-purple-300"
        >
          ← Back to Projects
        </Link>

        <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
          {project.category}
        </p>

        <h1 className="mb-6 text-4xl font-extrabold sm:text-5xl">
          {project.title}
        </h1>

        <div className="mb-10 rounded-2xl border border-gray-700 bg-[#111827] p-7 sm:p-9">
          <h2 className="mb-4 text-2xl font-bold">Project Overview</h2>

          <p className="leading-8 text-gray-400">{project.description}</p>
        </div>

        <div className="mb-10 rounded-2xl border border-gray-700 bg-[#111827] p-7 sm:p-9">
          <h2 className="mb-5 text-2xl font-bold">Technologies Used</h2>

          <div className="flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-purple-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        <div className="mb-10 rounded-2xl border border-gray-700 bg-[#111827] p-7 sm:p-9">
          <h2 className="mb-5 text-2xl font-bold">Challenges Faced</h2>

          <ul className="space-y-3 text-gray-400">
            {project.challenges.map((challenge) => (
              <li key={challenge}>• {challenge}</li>
            ))}
          </ul>
        </div>

        <div className="mb-10 rounded-2xl border border-gray-700 bg-[#111827] p-7 sm:p-9">
          <h2 className="mb-5 text-2xl font-bold">Future Improvements</h2>

          <ul className="space-y-3 text-gray-400">
            {project.improvements.map((improvement) => (
              <li key={improvement}>• {improvement}</li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-4">
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-purple-600 px-6 py-3 font-semibold transition hover:bg-purple-700"
            >
              Live Website
            </a>
          )}

          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-purple-500 px-6 py-3 font-semibold transition hover:bg-purple-600"
          >
            GitHub Profile
          </a>
        </div>
      </div>
    </main>
  );
}
