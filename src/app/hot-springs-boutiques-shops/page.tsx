import TripConnections from "@/components/TripConnections";
import BusinessDirectoryPage from "@/components/businesses/BusinessDirectoryPage";
import { boutiquesAndShopsPage } from "@/data/businessDirectoryPages";

export const metadata = { ...boutiquesAndShopsPage.metadata, title: { absolute: "Shopping in Hot Springs, AR | Boutiques & Local Shops" }, description: "Discover Hot Springs boutiques, gifts and local shops around downtown and beyond. Find listings, nearby Bathhouse Row guides and places to eat afterward." };

export default function HotSpringsBoutiquesAndShopsPage() {
  return <BusinessDirectoryPage {...boutiquesAndShopsPage.props} title="Shopping in Hot Springs, Arkansas" afterContent={
    <TripConnections heading="Keep exploring after the shops" links={[
      { href: "/hot-springs-antique-thrift-flea-markets", label: "Antiques, thrift & flea markets" },
      { href: "/hot-springs-ar-restaurants", label: "Find somewhere to eat" },
      { href: "/bathhouse-row", label: "Bathhouse Row" },
      { href: "/this-weekend", label: "This weekend" },
    ]} />
  } />;
}
