import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-800 bg-[#111827] px-6 py-10 text-white sm:px-10 md:px-14 lg:px-20 xl:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
          {/* Logo and Name */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-2xl font-bold text-purple-400">
              Tanjina Alam
            </Link>

            <p className="mt-2 text-sm text-gray-400">Frontend Developer</p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-5 text-sm text-gray-400">
            <Link href="/#home" className="transition hover:text-purple-400">
              Home
            </Link>

            <Link href="/#about" className="transition hover:text-purple-400">
              About
            </Link>

            <Link href="/#skills" className="transition hover:text-purple-400">
              Skills
            </Link>

            <Link
              href="/#projects"
              className="transition hover:text-purple-400"
            >
              Projects
            </Link>

            <Link href="/#contact" className="transition hover:text-purple-400">
              Contact
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <Link
              href="https://github.com/tanjinabd07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-full border border-gray-700 p-3 text-gray-300 transition hover:border-purple-500 hover:text-purple-400"
            >
              <FaGithub size={20} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/tanjina-alam-2a10591bb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-full border border-gray-700 p-3 text-gray-300 transition hover:border-purple-500 hover:text-purple-400"
            >
              <FaLinkedin size={20} />
            </Link>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-9 border-t border-gray-800 pt-7 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Tanjina Alam. All rights reserved.
          </p>

          <p className="mt-2 text-sm text-gray-500">
            Designed & Developed by{" "}
            <span className="font-semibold text-purple-400">Tanjina Alam</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
