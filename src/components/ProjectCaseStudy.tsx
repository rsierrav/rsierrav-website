import Image from "next/image";
import type { Project } from "@/data/projects";

interface ProjectCaseStudyProps {
  project: Project;
}

export default function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
  const sections = [
    ["Problem", project.problem],
    ["My Contribution", project.contribution],
    ["Solution", project.solution],
    ["Challenges", project.challenges],
    ["What I Learned", project.learnings],
  ] as const;

  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1>{project.title}</h1>
      <p className="max-w-2xl text-slate-600 dark:text-slate-400">
        {project.description}
      </p>

      <dl className="mb-10 grid gap-5 rounded-lg border border-slate-200 bg-white p-5 text-slate-700 shadow-sm sm:grid-cols-3 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
        {project.role && (
          <div>
            <dt className="font-semibold">Role</dt>
            <dd>{project.role}</dd>
          </div>
        )}
        {project.year && (
          <div>
            <dt className="font-semibold">Year</dt>
            <dd>{project.year}</dd>
          </div>
        )}
        <div>
          <dt className="font-semibold">Technologies</dt>
          <dd>{project.technologies.join(" · ")}</dd>
        </div>
      </dl>

      {sections.map(
        ([heading, content]) =>
          content && (
            <section key={heading}>
              <h2 className="mt-10">{heading}</h2>
              <p className="max-w-2xl text-slate-600 dark:text-slate-400">
                {content}
              </p>
            </section>
          ),
      )}

      {project.images && project.images.length > 0 && (
        <section>
          <h2 className="mt-10">Screenshots</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {project.images.map((image) => (
              <Image
                key={image.src}
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="h-auto w-full rounded-lg border border-slate-200 dark:border-slate-800"
              />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
