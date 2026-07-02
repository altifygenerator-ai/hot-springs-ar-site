import BusinessDirectoryPage from "@/components/businesses/BusinessDirectoryPage";
import { hotSpringsAttractionsPage } from "@/data/businessDirectoryPages";

export const metadata = hotSpringsAttractionsPage.metadata;

export default function HotSpringsAttractionsPage() {
  return <BusinessDirectoryPage {...hotSpringsAttractionsPage.props} />;
}
