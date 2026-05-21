import Link from "next/link";

type RelatedLocalLinksProps = {
  links: {
    label: string;
    href: string;
  }[];
};

export default function RelatedLocalLinks({ links }: RelatedLocalLinksProps) {
  if (!links.length) return null;

  return (
    <div className="local-spot-related">
      <p>Related guides</p>

      <div>
        {links.map((link) => (
          <Link key={`${link.href}-${link.label}`} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}