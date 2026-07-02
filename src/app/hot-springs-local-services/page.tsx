import BusinessDirectoryPage from "@/components/businesses/BusinessDirectoryPage";
import { localServicesPage } from "@/data/businessDirectoryPages";

export const metadata = localServicesPage.metadata;

export default function HotSpringsLocalServicesPage() {
  return <BusinessDirectoryPage {...localServicesPage.props} />;
}
