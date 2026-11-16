import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex min-h-screen w-full items-center bg-[#0b1120] px-6 py-28 text-white sm:px-10 md:px-14 lg:px-20 xl:px-24"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* Introduction */}
        <div>
          <p className="mb-4 font-medium text-purple-400">Hello, I'm</p>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Tanjina Alam
          </h1>

          <h2 className="mt-4 text-2xl font-bold text-purple-400 sm:text-3xl">
            Frontend Developer
          </h2>

          <p className="mt-6 max-w-xl text-base leading-8 text-gray-400">
            I am a passionate Frontend Developer who loves building modern,
            responsive and user-friendly web applications. I enjoy learning new
            technologies and turning creative ideas into real-world digital
            experiences.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="rounded-full bg-purple-600 px-7 py-3 font-semibold transition hover:bg-purple-700"
            >
              Contact Me
            </Link>

            <Link
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 rounded-full border border-purple-500 px-7 py-3 font-semibold transition hover:bg-purple-600"
            >
              <Download size={18} />
              Download Resume
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-9 flex items-center gap-5">
            <Link
              href="https://github.com/tanjinabd07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-gray-700 p-3 transition hover:border-purple-500 hover:text-purple-400"
            >
              <FaGithub size={22} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/tanjina-alam-2a10591bb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-gray-700 p-3 transition hover:border-purple-500 hover:text-purple-400"
            >
              <FaLinkedin size={22} />
            </Link>
          </div>
        </div>

        {/* Profile Image Placeholder */}
        <div className="flex justify-center md:justify-end">
          <div className="relative flex h-72 w-72 items-center justify-center overflow-hidden rounded-full border-4 border-purple-500 bg-gradient-to-br from-purple-600 to-indigo-900 shadow-2xl shadow-purple-500/20 sm:h-96 sm:w-96">
            <span className="text-7xl font-bold text-white">TA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
