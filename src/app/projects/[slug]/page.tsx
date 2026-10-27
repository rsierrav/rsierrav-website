import NotFound from "@/app/NotFound";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import { getProjectBySlug } from "@/data/projects";
import { useParams } from "react-router";

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <title>{`${project.title} | Rosa Sierra Villanueva`}</title>
      <meta name="description" content={project.description} />
      <ProjectCaseStudy project={project} />
    </>
  );
}
