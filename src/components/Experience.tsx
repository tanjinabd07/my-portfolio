export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full bg-[#0b1120] px-6 py-24 text-white sm:px-10 md:px-14 lg:px-20 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
            My Professional Journey
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Work <span className="text-purple-400">Experience</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-purple-500" />
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-gray-700 bg-[#111827] p-7 transition hover:border-purple-500 sm:p-9">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <span className="rounded-full bg-purple-500/10 px-4 py-1.5 text-sm font-semibold text-purple-400">
                Internship
              </span>

              <span className="text-sm text-gray-400">4 Months</span>
            </div>

            <h3 className="text-2xl font-bold">WordPress Developer Intern</h3>

            <p className="mt-2 font-semibold text-purple-400">Zaman IT</p>

            <p className="mt-5 leading-7 text-gray-400">
              Worked as a WordPress Developer Intern, gaining practical
              experience in building and customizing WordPress websites.
              Developed website layouts using Elementor and customized WordPress
              themes to create user-friendly website designs.
            </p>

            <div className="mt-7">
              <h4 className="mb-4 font-semibold text-white">
                Key Responsibilities
              </h4>

              <ul className="space-y-3 text-gray-400">
                <li>• Developed and prepared WordPress websites.</li>
                <li>• Created website layouts using Elementor.</li>
                <li>• Customized WordPress themes.</li>
                <li>• Worked on website design and layout improvements.</li>
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {["WordPress", "Elementor", "Theme Customization"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300"
                  >
                    {skill}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
