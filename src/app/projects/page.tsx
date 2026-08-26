import Link from "next/link";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
}

export function LinkButton({ href, children }: LinkButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors duration-200"
    >
      {children}
    </Link>
  );
}

export function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
      {label}
    </span>
  );
}

export default function Projects() {
  return (
    <div>
      <main>
        <h1>Projects</h1>
        <p>
          A collection of professional, academic, and personal projects I've
          worked on, along with a few ideas I'm excited to explore next.
        </p>
        <h2>Featured Project</h2>
        <h3>Digital Bill of Lading</h3>
        <p className="font-bold">Brown Strauss · E-gineering · 2026</p>
        <p>
          A mobile-friendly digital signing workflow that allows drivers to
          locate, review, and electronically sign Bill of Lading documents.
        </p>
        <p className="font-mono">
          React · TypeScript · C# · ASP.NET Core · Azure SQL
        </p>
        <div className="space-x-2">
          <Tag label="Professional" />
          <Tag label="Full Stack" />
        </div>
        <div className="mt-4">
          <LinkButton href="/projects/digital-bill-of-lading">
            View Project →
          </LinkButton>
        </div>
        <h2>Other Work</h2>
      </main>
    </div>
  );
}
