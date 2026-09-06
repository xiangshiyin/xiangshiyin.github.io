type BrandProps = { publisherName: string; shortName: string };

export function Brand({ publisherName, shortName }: BrandProps) {
  const hasAmpersand = shortName.includes("&");
  const [first = "N", second = "F"] = shortName.replace("&", "").split("");
  return <a className="brand" href="#top" aria-label={`${publisherName}首页`}>
    <span className={`brand-mark ${hasAmpersand ? "" : "brand-mark-cjk"}`}>
      {hasAmpersand ? <>{first}<span>&amp;</span>{second}</> : shortName}
    </span>
    <span className="brand-name">{publisherName}</span>
  </a>;
}
