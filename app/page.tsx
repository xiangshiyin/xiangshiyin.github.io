import site from "@/content/site.json";
import books from "@/content/books.json";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Catalog } from "@/components/Catalog";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import type { Book } from "@/types/content";

export default function Home() {
  return <main>
    <Header publisherName={site.publisherName} shortName={site.shortName} navigation={site.navigation}/>
    <Hero content={site.hero} foundedYear={site.foundedYear}/>
    <Catalog books={books as Book[]} content={site.catalog} shortName={site.shortName}/>
    <About content={site.about}/>
    <Contact content={site.contact}/>
    <Footer publisherName={site.publisherName} shortName={site.shortName} content={site.footer} email={site.contact.sections[0].email}/>
  </main>;
}
