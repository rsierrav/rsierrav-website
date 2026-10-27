import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-200 bg-slate-50/95 dark:border-slate-800 dark:bg-slate-950/95">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="m-0 text-base font-semibold text-slate-900 dark:text-slate-100">
          Rosa Sierra Villanueva
        </p>
        <ul className="flex flex-wrap items-center gap-1 text-sm font-medium">
          <li>
            <Link
              href="/"
              className="block rounded-md px-3 py-2 text-slate-600 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 dark:text-slate-300 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:focus-visible:outline-slate-100"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className="block rounded-md px-3 py-2 text-slate-600 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 dark:text-slate-300 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:focus-visible:outline-slate-100"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              href="/projects"
              className="block rounded-md px-3 py-2 text-slate-600 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 dark:text-slate-300 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:focus-visible:outline-slate-100"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="block rounded-md px-3 py-2 text-slate-600 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 dark:text-slate-300 dark:hover:bg-slate-100 dark:hover:text-slate-900 dark:focus-visible:outline-slate-100"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
