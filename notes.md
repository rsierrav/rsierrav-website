# Portfolio Development Notes

## Project Data

- Keep project content in `src/data/projects.ts`, not directly inside page components.
- Add a project by creating one new object in the `projects` array.
- Give every project a unique, URL-friendly `slug`, such as `digital-bill-of-lading`.
- Keep technologies as an array:

  ```ts
  technologies: ["React", "TypeScript", "ASP.NET Core"];
  ```

  The UI can decide how to display that array.

- Only fill in optional case-study fields when you have accurate content. Avoid placeholder claims.

## Next.js Routing

- `page.tsx` is the project list route: `/projects`.
- `page.tsx` is the dynamic detail route: `/projects/my-project-slug`.
- `generateStaticParams` builds a static page for every project slug.
- `generateMetadata` gives each project its own browser title and description.
- `notFound()` handles URLs for projects that do not exist.

## Components

- Keep `ProjectCard` focused on summaries and navigation.
- Keep `ProjectCaseStudy` focused on longer project details.
- Pass a complete `project` object when a component needs several related values.
- Create a new reusable component only when content or styling is repeated.

## Tailwind Layout

- Use a centered container for page content:

  ```tsx
  className = "mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14";
  ```

- Prefer responsive layouts over fixed widths.
- Use grid columns for repeated content:

  ```tsx
  className = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3";
  ```

- Mobile styles are the default. Prefixes such as `sm:` and `lg:` apply changes at larger sizes.

## Accessibility And Interaction

- Every clickable item needs an understandable label.
- Use `focus-visible` styles so keyboard users can see which link or button is selected.
- Use real `<button>` elements for actions and `<Link>` or `<a>` elements for navigation.
- Use semantic headings in order: `h1`, then `h2`, then `h3`.

## Before Adding A Feature

Ask:

1. Is this repeated content that belongs in data?
2. Does it need its own reusable component?
3. Does it work on a narrow mobile screen?
4. Can someone use it with only a keyboard?
5. Does it preserve the existing site’s visual style?
6. Does `npm run build` still pass?

## Useful Commands

```bash
npm run dev
npm run build
npx tsc --noEmit
npm run lint
```

## Growth Path

When the portfolio has more projects:

- Add real role, year, problem, solution, challenges, and learning notes.
- Add screenshots to the existing `images` field.
- Add project categories or featured status only when you have enough projects for filtering to be useful.
- Consider a CMS only when editing local TypeScript data becomes inconvenient.
