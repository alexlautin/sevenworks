# SevenWorks

SevenWorks is a resume builder for students, built with Next.js, Firebase and `@react-pdf/renderer`. Pick one of 14 field-specific templates, fill in your details section by section, and watch the real PDF update beside the form as you type. Download a clean, text-based PDF when you're done.

## Features
- 14 templates for business, STEM, health, human services, law, policy, journalism, museums and environmental work, with a gallery rendered from the real templates
- Live PDF preview: every change re-renders the PDF with react-pdf and draws it with pdf.js
- Switch templates, font and text size at any time without losing content
- Autosave (Firestore for signed-in users, `sessionStorage` in demo mode)
- One-click PDF download
- Sign in with Google, GitHub or email (Firebase Auth), when accounts are turned on
- Responsive down to phone width, with light and dark themes

## Getting Started

### Prerequisites
- Node.js 20 or newer
- pnpm
- Optional: a Firebase project with Authentication and Firestore, for real accounts

### Installation

1. **Clone the repository and install dependencies:**
   ```bash
   git clone https://github.com/alexlautin/sevenworks.git
   cd sevenworks/sevenworks
   pnpm install
   ```

2. **Optional: configure Firebase** in `sevenworks/.env.local` (see [Environment variables](#environment-variables)). Without it the app runs in demo mode only.

3. **Run the development server:**
   ```bash
   pnpm dev
   ```

4. **Open the app** at [http://localhost:3000](http://localhost:3000).

## Demo Mode
Open `/demo` (or click **Try the demo** on the home page) to use the app with sample data and no backend. It opens a sample resume in the editor, with a second one on the dashboard. You can edit them, create new ones from any template, and download PDFs. Changes are saved to `sessionStorage` for that tab only, with an in-memory fallback when storage is blocked, and no requests go to Firebase. Use **Exit demo** in the banner to leave and clear the sample data.

To make a deployment demo-only (for example a portfolio site), set `NEXT_PUBLIC_PORTFOLIO_MODE=true`. Sign-in and sign-up then explain that accounts are turned off and point to the demo, even if Firebase keys are set. The same happens when no Firebase keys are set.

All resume reads and writes go through `src/lib/data.ts`, which hands each call to `src/lib/demo-data.ts` while demo mode is on. Firebase is loaded lazily and only when accounts are enabled, so with no Firebase env vars set the app still builds and runs.

## Environment variables
All are optional. Set them in `sevenworks/.env.local` locally, or in the Vercel project settings.

| Variable | Purpose |
|---|---|
| `NEXT_PUBLIC_PORTFOLIO_MODE` | `true` makes the deployment demo-only |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase web config, needed for real accounts |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | |

For a portfolio deploy on Vercel, set the project's root directory to `sevenworks` and add `NEXT_PUBLIC_PORTFOLIO_MODE=true`. Nothing else is needed.

## Project Structure
- `sevenworks/src/app/` - pages: landing, `demo`, `dashboard`, `templates`, `editor`, `register`, `legal`
- `sevenworks/src/app/editor/` - editor page, section forms, live preview (`pdf-preview.tsx`), PDF rendering and download (`pdf.ts`)
- `sevenworks/src/app/editor/templates/` - the react-pdf templates and `registry.tsx`, which maps template ids to components
- `sevenworks/src/lib/` - data layer, demo mode, template catalog, Firebase client, config
- `sevenworks/src/components/` - shared UI (headers, demo banner, auth form)
- `sevenworks/scripts/` - `pnpm thumbnails` re-renders `public/templates/*.png` from the real templates (macOS, uses `sips`)

## Deployment
Deploy easily on [Vercel](https://vercel.com/) or your preferred platform. See [Next.js deployment docs](https://nextjs.org/docs/app/building-your-application/deploying).

## History
SevenWorks started as a team project for a class. Later, Alex Lautin fixed the templates, added demo mode, rebuilt the editor preview and redesigned the interface. The original class version is kept under the `class-project` tag.

## License
MIT

---

Made by Alex Lautin, Andy Blumberg, Parker Wischover, Lester Martin, Chris Kim, Tomas Lee, and Andrea Valentino
