import BusinessDirectoryPage from "@/components/businesses/BusinessDirectoryPage";
import { boutiquesAndShopsPage } from "@/data/businessDirectoryPages";

export const metadata = boutiquesAndShopsPage.metadata;

export default function HotSpringsBoutiquesAndShopsPage() {
  return <BusinessDirectoryPage {...boutiquesAndShopsPage.props} />;
}
