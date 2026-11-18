const educationList = [
  {
    degree: "Master's Degree in English",
    institution: "North East University Bangladesh",
    description:
      "Completed my Master's degree in English, developing communication, research and analytical skills.",
    status: "Completed",
  },
  {
    degree: "Honours Degree in English",
    institution: "North East University Bangladesh",
    description:
      "Completed my Honours degree in English with a strong academic foundation in literature and language.",
    status: "Completed",
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="w-full bg-[#111827] px-6 py-24 text-white sm:px-10 md:px-14 lg:px-20 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
            My Academic Background
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            My <span className="text-purple-400">Education</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-purple-500" />
        </div>

        <div className="mx-auto max-w-3xl space-y-8">
          {educationList.map((education, index) => (
            <div
              key={education.degree}
              className="relative rounded-2xl border border-gray-700 bg-[#0b1120] p-7 transition hover:border-purple-500 sm:p-9"
            >
              <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                <span className="rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
                  {education.status}
                </span>

                <span className="text-sm text-gray-500">0{index + 1}</span>
              </div>

              <h3 className="mb-3 text-xl font-bold sm:text-2xl">
                {education.degree}
              </h3>

              <p className="mb-4 font-medium text-purple-400">
                {education.institution}
              </p>

              <p className="leading-7 text-gray-400">{education.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
