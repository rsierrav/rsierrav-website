export function GitHubButton() {
  return (
    <a
      href="https://github.com/rsierrav"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white dark:focus-visible:outline-slate-100"
    >
      View GitHub
    </a>
  );
}
export function LinkedInButton() {
  return (
    <a
      href="https://www.linkedin.com/in/rosa-sierra-villanueva-945b95231/"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition-colors duration-200 hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-400"
    >
      View LinkedIn
    </a>
  );
}

export default function HomePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-4xl leading-tight sm:text-5xl">
        Rosa Sierra Villanueva
      </h1>
      <h2 className="text-xl font-semibold leading-8 text-slate-700 dark:text-slate-300">
        Junior Software Developer and Consultant
      </h2>
      <div className="max-w-2xl">
        <p className="text-slate-600 dark:text-slate-400">
          I’m a software developer based in Indianapolis with experience
          building full-stack web applications using React, TypeScript, C#,
          .NET, and SQL. I enjoy turning real-world problems into practical,
          user-focused software and learning new technologies through hands-on
          development.
        </p>
        <p className="text-slate-600 dark:text-slate-400">
          You can also find me on GitHub and LinkedIn, where I share my latest
          projects and professional updates.
        </p>
      </div>
      <div className="flex flex-wrap gap-3">
        <GitHubButton />
        <LinkedInButton />
      </div>
    </main>
  );
}
