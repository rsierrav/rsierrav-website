export interface ProjectImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  technologies: string[];
  role?: string;
  year?: string;
  problem?: string;
  contribution?: string;
  solution?: string;
  challenges?: string;
  learnings?: string;
  images?: ProjectImage[];
}

export const projects: Project[] = [
  {
    slug: "digital-bill-of-lading",
    title: "Digital Bill of Lading",
    description:
      "A mobile-friendly digital signing workflow that allows drivers to locate, review, and electronically sign Bill of Lading documents.",
    technologies: ["React", "TypeScript", "C#", "ASP.NET Core", "Azure SQL"],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
