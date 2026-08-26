import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="grid-cols-4 grid gap-4 p-4 items-center">
      <ul className="col-span-3 flex justify-between">
        <li>
          <p>Rosa Sierra Villanueva</p>
        </li>
        <li className="text-slate-500 hover:text-white hover:bg-slate-800 px-3 py-1.5 rounded-md transition-all">
          <Link href="/">Home</Link>
        </li>
        <li className="text-slate-500 hover:text-white hover:bg-slate-800 px-3 py-1.5 rounded-md transition-all">
          <Link href="/resume">Resume</Link>
        </li>
        <li className="text-slate-500 hover:text-white hover:bg-slate-800 px-3 py-1.5 rounded-md transition-all">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="text-slate-500 hover:text-white hover:bg-slate-800 px-3 py-1.5 rounded-md transition-all">
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
