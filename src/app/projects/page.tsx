import { title } from "process";
import ProjectCard from "../../components/ProjectCard";

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
        <ProjectCard
          title="Digital Bill of Lading"
          description="A mobile-friendly digital signing workflow that allows drivers to locate, review, and electronically sign Bill of Lading documents."
          technologies="React · TypeScript · C# · ASP.NET Core · Azure SQL"
        />
      </main>
    </div>
  );
}
