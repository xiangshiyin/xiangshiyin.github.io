"use client";

import { useMemo, useState } from "react";
import type { Book, SiteContent } from "@/types/content";

type CatalogProps = { books: Book[]; content: SiteContent["catalog"]; shortName: string };

export function Catalog({ books, content, shortName }: CatalogProps) {
  const [filter, setFilter] = useState(content.allGenresLabel);
  const genres = useMemo(() => [content.allGenresLabel, ...new Set(books.map((book) => book.genre))], [books, content.allGenresLabel]);
  const visibleBooks = filter === content.allGenresLabel ? books : books.filter((book) => book.genre === filter);

  return <section className="catalog" id="books">
    <div className="section-heading"><div><span className="eyebrow">{content.eyebrow}</span><h2>{content.title}</h2></div><p>{content.subtitle}</p></div>
    <div className="filters" role="group" aria-label={content.filterLabel}>
      {genres.map((genre) => <button key={genre} onClick={() => setFilter(genre)} className={filter === genre ? "active" : ""}>{genre}</button>)}
    </div>
    <div className="book-grid" aria-live="polite">
      {visibleBooks.map((book) => <article className="book" key={`${book.title}-${book.author}`}>
        <div className={`cover ${book.coverColor}`}><span>{shortName}</span><b>{book.title}</b><i>{book.coverMark}</i><span>{book.author}</span></div>
        <div className="book-meta">
          <span>{book.genre} · {book.year}</span><h3>{book.title}</h3><h4>{book.author}</h4><p>{book.description}</p>
          {book.purchaseUrl && <a className="purchase-link" href={book.purchaseUrl} target="_blank" rel="noopener noreferrer" aria-label={`${content.purchaseButtonLabel}：《${book.title}》`}>{content.purchaseButtonLabel} <span aria-hidden="true">↗</span></a>}
        </div>
      </article>)}
    </div>
  </section>;
}
