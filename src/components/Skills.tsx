const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "HTML", level: 90 },
      { name: "CSS", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "TypeScript", level: 70 },
      { name: "React.js", level: 85 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 70 },
    ],
  },
  {
    title: "Tools & Technologies",
    skills: [
      { name: "Git & GitHub", level: 80 },
      { name: "Firebase", level: 65 },
      { name: "Vercel", level: 80 },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-full bg-[#0b1120] px-6 py-24 text-white sm:px-10 md:px-14 lg:px-20 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
            My Expertise
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            My <span className="text-purple-400">Skills</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-purple-500" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-gray-700 bg-[#111827] p-6 transition hover:border-purple-500"
            >
              <h3 className="mb-7 text-xl font-bold text-purple-400">
                {category.title}
              </h3>

              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="mb-2 flex items-center justify-between">
                      <span className="font-medium text-gray-300">
                        {skill.name}
                      </span>

                      <span className="text-sm text-purple-400">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-2 overflow-hidden rounded-full bg-gray-700">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-500"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
