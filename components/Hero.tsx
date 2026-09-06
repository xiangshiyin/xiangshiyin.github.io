import type { SiteContent } from "@/types/content";

type HeroProps = { content: SiteContent["hero"]; foundedYear: string };

export function Hero({ content, foundedYear }: HeroProps) {
  return <section className="hero" id="top">
    <div className="eyebrow">{content.eyebrow}</div>
    <h1>{content.headline}<br/><em>{content.highlightedHeadline}</em></h1>
    <p>{content.description}</p>
    <a className="text-link" href="#books">{content.buttonText} <span>↓</span></a>
    <div className="edition-mark" aria-hidden="true"><span>{content.establishedLabel}</span><b>{foundedYear}</b><i>◆</i></div>
  </section>;
}
