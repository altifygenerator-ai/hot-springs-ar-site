import BusinessDirectoryPage from "@/components/businesses/BusinessDirectoryPage";
import { outdoorBusinessesPage } from "@/data/businessDirectoryPages";

export const metadata = outdoorBusinessesPage.metadata;

export default function HotSpringsOutdoorBusinessesPage() {
  return <BusinessDirectoryPage {...outdoorBusinessesPage.props} />;
}
