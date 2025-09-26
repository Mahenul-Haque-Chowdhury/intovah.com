# Intovah Marketing Site

Marketing presence for Intovah, built with React, Vite, TypeScript, and Tailwind CSS.

## 🔧 Tech Stack

- [Vite](https://vitejs.dev/) for lightning-fast dev tooling
- [React 18](https://react.dev/) with [React Router](https://reactrouter.com/) for routing
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [EmailJS](https://www.emailjs.com/) to deliver newsletter sign-up emails
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for consistent, automated code quality

## 🚀 Getting Started

```bash
npm install
npm run dev
```

The dev server defaults to [http://localhost:5173](http://localhost:5173).

## 🔐 Environment Variables

Copy `.env.example` (or create a new `.env.local`) and provide the following values:

| Variable                         | Description                                               |
| -------------------------------- | --------------------------------------------------------- |
| `VITE_EMAILJS_SERVICE_ID`        | EmailJS service identifier                                |
| `VITE_EMAILJS_PUBLIC_KEY`        | EmailJS public API key                                    |
| `VITE_EMAILJS_USER_TEMPLATE_ID`  | Email template sent to the subscriber                     |
| `VITE_EMAILJS_ADMIN_TEMPLATE_ID` | (Optional) notification template sent to the Intovah team |
| `VITE_API_BASE_URL`              | Base URL for backend integrations                         |

## 📜 Available Scripts

| Command             | Description                                                   |
| ------------------- | ------------------------------------------------------------- |
| `npm run dev`       | Start the Vite development server with Tailwind in watch mode |
| `npm run build`     | Generate production assets                                    |
| `npm run preview`   | Preview the production build locally                          |
| `npm run lint`      | Lint the project with ESLint                                  |
| `npm run lint:fix`  | Lint and auto-fix issues                                      |
| `npm run typecheck` | Run TypeScript in no-emit mode                                |
| `npm run validate`  | Run linting and type-checking in parallel                     |
| `npm run format`    | Format the repository with Prettier                           |

## 🌐 Deployment

The app is optimized for static hosting. Run `npm run build` and serve the contents of `dist/` via your platform of choice (Vercel, Netlify, GitHub Pages, etc.).

## 👋 About Intovah

Intovah delivers cutting-edge solutions to revolutionize your business. Explore more at [intovah.com](https://intovah.com).
