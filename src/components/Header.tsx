import Link from "next/link";

const exploreLinks = [
  { href: "/explore", label: "Explore Hot Springs" },
  { href: "/things-to-do-in-hot-springs-ar", label: "Things To Do" },
  { href: "/history", label: "History" },
];

const stayLinks = [
  { href: "/hot-springs-ar-cabins", label: "Cabins" },
  { href: "/hot-springs-ar-hotels", label: "Hotels" },
];

const localLinks = [
  { href: "/hot-springs-ar-restaurants", label: "Restaurants" },
  { href: "/local-businesses", label: "Local Businesses" },
];

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          Hot Springs Arkansas
        </Link>

        <nav className="nav">
          <Link href="/">Home</Link>

          <div className="nav-dropdown">
            <button>Explore</button>
            <div className="dropdown-menu">
              {exploreLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-dropdown">
            <button>Places To Stay</button>
            <div className="dropdown-menu">
              {stayLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="nav-dropdown">
            <button>Local Guide</button>
            <div className="dropdown-menu">
              {localLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <Link className="nav-cta" href="/local-businesses">
            Get Listed
          </Link>
        </nav>
      </div>
    </header>
  );
}