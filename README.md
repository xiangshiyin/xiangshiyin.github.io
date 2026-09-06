# Publisher website

A responsive, single-page catalog for an independent publisher. The included content is sample copy for **North & Field Press** and is meant to be replaced.

## Customize the site

- Start with the [Website Content Playbook](CONTENT_PLAYBOOK.md) for the concise update workflow.
- Edit publisher details, headlines, about text, contact details, and statistics in `content/site.json`.
- Edit the book inventory in `content/books.json`.
- See `CONTENT_GUIDE.md` for step-by-step, nontechnical editing instructions.
- Developers can change colors, typography, and layout in `app/globals.css`.

The front-end sections are separated into the `components` folder. Most routine updates should not require changing them.

## Preview locally

```bash
npm install
npm run dev
```

## Publish at GitHub Pages

1. Create a GitHub repository named `publisher-website` (or `<your-username>.github.io` for a root user site).
2. Push this folder to the repository's `main` branch.
3. In the repository, open **Settings → Pages** and choose **GitHub Actions** under Source.
4. The included workflow publishes the site automatically after every push to `main`.

The Pages build uses relative asset paths, so it works both in a project repository and at a root `github.io` address.
