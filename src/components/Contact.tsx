import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full bg-[#0b1120] px-6 py-24 text-white sm:px-10 md:px-14 lg:px-20 xl:px-24"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-widest text-purple-400">
            Get In Touch
          </p>

          <h2 className="text-3xl font-bold sm:text-4xl">
            Contact <span className="text-purple-400">Me</span>
          </h2>

          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-purple-500" />

          <p className="mx-auto mt-6 max-w-2xl leading-7 text-gray-400">
            I am always interested in discussing new projects, creative ideas,
            and opportunities to grow. Feel free to contact me.
          </p>
        </div>

        <div className="mx-auto max-w-2xl rounded-2xl border border-gray-700 bg-[#111827] p-8 sm:p-10">
          <div className="flex flex-col items-center text-center">
            <div className="mb-5 rounded-full bg-purple-500/10 p-5 text-purple-400">
              <FaEnvelope size={30} />
            </div>

            <h3 className="mb-3 text-xl font-bold">Email Me</h3>

            <a
              href="mailto:tanjinabd07@gmail.com"
              className="text-purple-400 transition hover:text-purple-300"
            >
              tanjinabd07@gmail.com
            </a>

            <a
              href="mailto:tanjinabd07@gmail.com"
              className="mt-7 rounded-full bg-purple-600 px-7 py-3 font-semibold transition hover:bg-purple-700"
            >
              Send Email
            </a>
          </div>

          <div className="my-8 border-t border-gray-700" />

          <div className="flex justify-center gap-5">
            <Link
              href="https://github.com/tanjinabd07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-gray-700 p-4 text-gray-300 transition hover:border-purple-500 hover:text-purple-400"
            >
              <FaGithub size={23} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/tanjina-alam-2a10591bb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-gray-700 p-4 text-gray-300 transition hover:border-purple-500 hover:text-purple-400"
            >
              <FaLinkedin size={23} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
