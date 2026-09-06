# Website Content Playbook

Use this quick guide for routine website updates. You only need to edit files in the `content` folder—do not change files in `app` or `components`.

## Before you start

1. Open the project’s `content` folder.
2. Use `site.json` for publisher and contact information.
3. Use `books.json` for the book inventory.
4. Change only the text between quotation marks.

## Update the header and publisher information

Open `content/site.json` and update these fields:

| Website content | Field to edit |
|---|---|
| Publisher name | `publisherName` |
| Short cover mark | `shortName` |
| Location | `location` and `hero.eyebrow` |
| Year established | `foundedYear` |
| Browser-tab title | `pageTitle` |
| Main headline | `hero.headline` and `hero.highlightedHeadline` |
| Introductory paragraph | `hero.description` |

Example:

```json
"publisherName": "Your Publisher Name",
"shortName": "YP",
"foundedYear": "2020"
```

## Update the book inventory

Open `content/books.json`.

- To edit a book, change the values in its existing `{ ... }` block.
- To remove a book, delete its complete `{ ... }` block and the adjacent comma.
- To add a book, copy an existing block and replace its details:

```json
{
  "title": "New Book Title",
  "author": "Author Name",
  "genre": "Fiction",
  "year": "2026",
  "coverColor": "clay",
  "coverMark": "VII",
  "description": "A short description shown beneath the book."
}
```

Use one of these cover colors: `clay`, `ink`, `moss`, `ochre`, `plum`, or `blue`. Genre buttons update automatically from the books in this file.

## Update contact information

Open `content/site.json`, find `contact`, then edit the appropriate item inside `sections`:

```json
{
  "title": "General inquiries",
  "email": "hello@yourpublisher.com",
  "description": "Street address\nCity, State ZIP"
}
```

Use `\n` where you want a new line, such as between two address lines. The first contact email is also used by the footer’s Email link.

## Check and publish

1. Save the files.
2. Run `npm run dev` and open `http://localhost:3000`.
3. Check the header, books, filter buttons, and contact links.
4. Stop the preview with `Ctrl+C`.
5. Commit and push to `main`; GitHub Pages will publish automatically.

## Avoid common formatting errors

- Keep labels and text inside double quotation marks.
- Keep the colon between each label and value.
- Keep commas between items, but do not add a comma after the last item.
- If the preview fails, check the line you last edited for a missing quote, comma, `{`, or `}`.

For more detail, see `CONTENT_GUIDE.md`.
