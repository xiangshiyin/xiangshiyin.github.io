import type { SiteContent } from "@/types/content";

export function About({ content }: { content: SiteContent["about"] }) {
  return <section className="about" id="about">
    <div><span className="eyebrow">{content.eyebrow}</span><h2>{content.title}</h2></div>
    <div className="about-copy"><p className="lead">{content.lead}</p><p>{content.body}</p><div className="values">{content.statistics.map((stat) => <span key={stat.label}><b>{stat.value}</b>{stat.label}</span>)}</div></div>
  </section>;
}
