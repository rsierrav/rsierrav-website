import { Link } from "react-router";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group block h-full overflow-hidden rounded-lg border border-slate-200 bg-white text-slate-700 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:bg-slate-50 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-slate-800 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800 dark:focus-visible:outline-slate-100"
    >
      <div className="flex h-full flex-col p-5 sm:p-6">
        <h2 className="mb-2 text-xl font-semibold leading-snug text-slate-900 transition-colors group-hover:text-slate-700 dark:text-slate-100 dark:group-hover:text-white">
          {project.title}
        </h2>
        <p className="mb-0 text-base font-normal leading-7 text-slate-600 dark:text-slate-400">
          {project.description}
        </p>
        <p className="mb-0 mt-5 text-sm font-normal leading-6 text-slate-600 dark:text-slate-400">
          <strong>Technologies:</strong> {project.technologies.join(" · ")}
        </p>
      </div>
    </Link>
  );
}
