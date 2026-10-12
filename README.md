# React Portfolio Starter

A responsive personal portfolio made with React, Vite, and Tailwind CSS v4. The layout includes Home, About, Projects, Resume, and Contact sections, plus a mobile menu and expandable project details.

## 1. Install Node.js
Install the current LTS version from https://nodejs.org/ if Node.js is not already installed.

## 2. Open the project
Extract this ZIP. In VS Code, choose **File → Open Folder** and select `react-portfolio-starter`.

## 3. Install dependencies
Open **Terminal → New Terminal** in VS Code and run:

```bash
npm install
```

## 4. Start the website
Run:

```bash
npm run dev
```

Open the local URL shown in the terminal, usually `http://localhost:5173`.

## 5. Personalize it
- Open `src/App.jsx` to edit the introduction, background, education, skills, and project details.
- Update the `projects` array near the top of `src/App.jsx` to change project titles, descriptions, tags, and URLs.
- Replace `your.email@example.com` in `src/App.jsx` with your real contact email. It appears in the Contact section and the form handler.
- Replace the GitHub and LinkedIn profile URLs with your actual profile links.
- Check education details and edit them to match your real history before submitting.
- Change colors in `src/style.css` by editing `--rose`, `--rose-dark`, and `--rose-light`.
- To add a real resume PDF, place it in `public/resume.pdf` and add a link such as `<a href="/resume.pdf" download>Download résumé</a>` where you want the button.

## 6. Test the production build
Stop the development server with `Ctrl + C`, then run:

```bash
npm run build
npm run preview
```

If the build succeeds, the deployable website is created in the `dist` folder.

## 7. Deploy with Vercel
1. Create or sign in to your account at https://vercel.com/.
2. Push the project to a GitHub repository, or import the project through Vercel if available.
3. In Vercel, choose **Add New → Project** and import the repository.
4. Keep the build command as `npm run build` and output directory as `dist` (Vercel normally detects Vite automatically).
5. Click **Deploy** and wait for the build to finish.
6. Open the public URL Vercel gives you and test every navigation link, project link, and contact section.

## Notes
- The contact form opens the visitor's default email application. It does not send email directly from the website.
- The skill-bar percentages are visual placeholders, not formal assessments. Adjust or remove them if needed.
- Update all placeholder links and verify every section before submitting.
