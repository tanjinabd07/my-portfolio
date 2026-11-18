export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#111827] px-6 py-24 text-white sm:px-10 md:px-14 lg:px-20 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-12 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
            Get To Know Me
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            About <span className="text-purple-400">Me</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-purple-500" />
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* About Description */}
          <div>
            <h3 className="mb-5 text-2xl font-bold">
              My Journey in Web Development
            </h3>

            <p className="mb-5 leading-8 text-gray-400">
              Hello! I am Tanjina Alam, a passionate Frontend Developer who
              enjoys creating modern, responsive and user-friendly websites.
            </p>

            <p className="mb-5 leading-8 text-gray-400">
              My academic background is in English. I completed both my Honours
              and Master&apos;s degrees in English. My interest in technology
              inspired me to start learning programming and explore the world of
              web development.
            </p>

            <p className="leading-8 text-gray-400">
              I have learned HTML, CSS, JavaScript, React.js, Next.js, Node.js
              and Express.js. I am also exploring TypeScript and MongoDB while
              improving my problem-solving skills. My goal is to build
              meaningful digital experiences and grow as a developer.
            </p>
          </div>

          {/* Information Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-xl border border-gray-700 bg-[#0b1120] p-6 transition hover:border-purple-500">
              <h4 className="mb-3 font-bold text-purple-400">Education</h4>
              <p className="text-gray-300">Honours & Master&apos;s</p>
              <p className="mt-2 text-sm text-gray-500">English</p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-[#0b1120] p-6 transition hover:border-purple-500">
              <h4 className="mb-3 font-bold text-purple-400">Frontend</h4>
              <p className="text-gray-300">Frontend Development</p>
              <p className="mt-2 text-sm text-gray-500">React.js & Next.js</p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-[#0b1120] p-6 transition hover:border-purple-500">
              <h4 className="mb-3 font-bold text-purple-400">Backend</h4>
              <p className="text-gray-300">Backend Development</p>
              <p className="mt-2 text-sm text-gray-500">Node.js & Express.js</p>
            </div>

            <div className="rounded-xl border border-gray-700 bg-[#0b1120] p-6 transition hover:border-purple-500">
              <h4 className="mb-3 font-bold text-purple-400">My Goal</h4>
              <p className="text-gray-300">Continuous Learning</p>
              <p className="mt-2 text-sm text-gray-500">
                Growing as a Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
