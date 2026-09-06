import { Brand } from "./Brand";
import type { SiteContent } from "@/types/content";

type FooterProps = { publisherName: string; shortName: string; content: SiteContent["footer"]; email: string };

export function Footer({ publisherName, shortName, content, email }: FooterProps) {
  return <footer><Brand publisherName={publisherName} shortName={shortName}/><p>{content.tagline}</p><div><a href={`mailto:${email}`}>{content.emailLabel}</a><a href="#books">{content.catalogLabel}</a><a href="#about">{content.aboutLabel}</a></div><small>{content.copyright}</small></footer>;
}
