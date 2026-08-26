export function GitHubButton() {
  return (
    <a
      href="https://github.com/rsierrav"
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-colors duration-200"
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
      className="inline-flex items-center justify-center px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors duration-200"
    >
      View LinkedIn
    </a>
  );
}

export default function HomePage() {
  return (
    <div>
      <main>
        <h1>Rosa Sierra Villanueva</h1>
        <h2>Junior Software Developer and Consultant</h2>
        <p>
          I’m a software developer based in Indianapolis with experience
          building full-stack web applications using React, TypeScript, C#,
          .NET, and SQL. I enjoy turning real-world problems into practical,
          user-focused software and learning new technologies through hands-on
          development.
        </p>
        <p>
          You can also find me on GitHub and LinkedIn, where I share my latest
          projects and professional updates.
        </p>
        <GitHubButton />
        <LinkedInButton />
      </main>
    </div>
  );
}
