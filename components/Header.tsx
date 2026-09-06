import { Brand } from "./Brand";
import type { SiteContent } from "@/types/content";

type HeaderProps = { publisherName: string; shortName: string; navigation: SiteContent["navigation"] };

export function Header({ publisherName, shortName, navigation }: HeaderProps) {
  return <header className="site-header">
    <Brand publisherName={publisherName} shortName={shortName} />
    <nav aria-label="主导航"><a href="#books">{navigation.books}</a><a href="#about">{navigation.about}</a><a href="#contact">{navigation.contact}</a></nav>
  </header>;
}
