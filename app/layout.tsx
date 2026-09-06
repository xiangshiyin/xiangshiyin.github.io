import type { Metadata } from "next";
import "./globals.css";
import site from "@/content/site.json";
export const metadata: Metadata = {
  title:site.pageTitle,
  description:site.pageDescription,
  openGraph:{title:site.publisherName,description:site.hero.highlightedHeadline,images:["/og.png"]},
  twitter:{card:"summary_large_image",title:site.publisherName,description:site.hero.highlightedHeadline,images:["/og.png"]},
};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="zh-CN"><body>{children}</body></html>}
