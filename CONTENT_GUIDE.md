# How to update the website content

You do not need to edit the website code for normal content changes. Everything visitors read is stored in two files inside the `content` folder.

## Change publisher information

Open `content/site.json` in GitHub or a text editor. You can replace any words between quotation marks after a label.

For example:

```json
"publisherName": "Your Publisher Name"
```

This file controls:

- The publisher name and short cover mark
- Browser title and search description
- Main headline and introduction
- Catalog heading
- About text and statistics
- Email addresses and mailing address
- Footer tagline and copyright

## Add or update a book

Open `content/books.json`. Each book is one block enclosed by `{` and `}`.

To add a book, copy an existing complete block, paste it before the final `]`, and put a comma between it and the previous book:

```json
{
  "title": "Book Title",
  "author": "Author Name",
  "genre": "Fiction",
  "year": "2026",
  "coverColor": "clay",
  "coverMark": "VII",
  "description": "A short description of the book.",
  "purchaseUrl": "https://bookstore.example.com/your-book"
}
```

The genre filter buttons are created automatically from the genres used by your books. You do not need to maintain a separate genre list.

Available cover colors are `clay`, `ink`, `moss`, `ochre`, `plum`, and `blue`.

The optional `purchaseUrl` controls the “购买此书” button. Paste a complete address beginning with `https://` to show the button, or use an empty value (`"purchaseUrl": ""`) to hide it.

## Important JSON rules

- Keep the quotation marks around text.
- Keep a colon between every label and value.
- Put a comma after each line except the last line in a block.
- Put a comma between book blocks, but not after the final book.
- To use a quotation mark inside text, type `\"`.

## Publish an update

If editing on GitHub, click **Commit changes**. The website will publish the update automatically. If editing locally, preview with `npm run dev`, then commit and push the changes to the `main` branch.
