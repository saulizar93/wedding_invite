# Wedding Invitation App

Interactive wedding invitation web application built with React and deployed using GitHub Pages.

---

## Development

In the project directory, you can run:

### `npm start`

Runs the app in development mode at [http://localhost:3000](http://localhost:3000).  
The page will reload when you make edits.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder, optimizing and minifying the assets.

---

## How to Deploy to GitHub Pages

This project is configured to deploy to GitHub Pages using the `gh-pages` package.

### Quick Deploy Command

Whenever you make updates (e.g. to `master`) and want them live on GitHub Pages, run:

```bash
npm run deploy
```

### What `npm run deploy` does:

1. **`predeploy`**: Automatically runs `npm run build` to compile the latest source code into static production assets in the `build/` folder.
2. **`deploy`**: Runs `gh-pages -d build`, which commits the static files in `build/` to the remote `gh-pages` branch and pushes it to GitHub.
3. GitHub Pages automatically detects the new commit on `gh-pages` and updates the live site (usually takes 1–2 minutes).

---

## How to Change the Deployment URL or Repository

GitHub Pages URL structure depends on whether the repository is a **User Site** or a **Project Site**:

- **User Site (`https://<username>.github.io/`)**:
  - Occurs when the GitHub repository is named exactly `<username>.github.io` (e.g., `saulizar93.github.io`).
  - GitHub hosts it directly at the root domain.
- **Project Site (`https://<username>.github.io/<repo-name>/`)**:
  - Occurs when the repository has any other name (e.g., `weddinginvite`, `bible-app`).
  - GitHub hosts it under a sub-path matching the repository name.

---

### Step-by-Step: Changing the Site URL (e.g. to `/weddinginvite`)

#### 1. Rename the Repository on GitHub

1. Open your repository on GitHub.
2. Navigate to **Settings** > **General**.
3. Under **Repository name**, enter the new name (e.g., `weddinginvite`) and click **Rename**.

#### 2. Update Your Local Git Remote URL

Point your local repository to the new remote URL:

```bash
git remote set-url origin https://github.com/<username>/<new-repo-name>.git
```

_(Example: `git remote set-url origin https://github.com/saulizar93/wedding_invite.git`)_

Verify with:

```bash
git remote -v
```

#### 3. Update `homepage` in `package.json`

Open `package.json` and update the `"homepage"` field to match the new URL:

```json
"homepage": "https://<username>.github.io/<new-repo-name>"
```

_(Example: `"homepage": "https://saulizar93.github.io/wedding_invite"`)_

> **Note**: Create React App uses `homepage` during `npm run build` to ensure all asset paths (scripts, CSS, images) resolve relative to `/wedding_invite/` rather than root `/`.

#### 4. Commit and Redeploy

Commit your changes and trigger a new deployment:

```bash
git add package.json
git commit -m "Update homepage URL for GitHub Pages"
git push origin master
npm run deploy
```

Once deployment completes, GitHub Pages will publish the site at the new URL!
