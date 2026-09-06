import type { SiteContent } from "@/types/content";

export function Contact({ content }: { content: SiteContent["contact"] }) {
  const titleCharacters = Array.from(content.title);
  const splitAt = Math.max(1, Math.ceil(titleCharacters.length / 2));
  return <section className="contact" id="contact">
    <span className="eyebrow">{content.eyebrow}</span>
    <h2>{titleCharacters.slice(0, splitAt).join("")}<br/><em>{titleCharacters.slice(splitAt).join("")}</em></h2>
    <div className="contact-grid">{content.sections.map((section) => <div key={section.title}>
      <h3>{section.title}</h3>
      {section.linkText ? null : <a href={`mailto:${section.email}`}>{section.email}</a>}
      <p>{section.description.split("\n").map((line, index) => <span key={line}>{index > 0 && <br/>}{line}</span>)}</p>
      {section.linkText && <a className="text-link" href={`mailto:${section.email}`}>{section.linkText}</a>}
    </div>)}</div>
  </section>;
}
