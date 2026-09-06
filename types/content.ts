export type Book = {
  title: string;
  author: string;
  genre: string;
  year: string;
  coverColor: string;
  coverMark: string;
  description: string;
};

export type SiteContent = typeof import("@/content/site.json");
