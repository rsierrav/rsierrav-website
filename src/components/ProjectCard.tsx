interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
}: ProjectCardProps) {
  return (
    // Card Wrapper
    <div className="mt-6 w-96 overflow-hidden rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-50">
      {/* Body Area */}
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {title}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
        <p className="mt-4 block font-sans text-sm font-light leading-relaxed text-inherit antialiased">
          <strong>Technologies:</strong> {technologies}
        </p>
      </div>
    </div>
  );
}
