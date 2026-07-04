export type BusinessClickTrackingInput = {
  action: string;
  business: string;
  city?: string;
  page?: string;
  placement: string;
  placementType?: "paid" | "editorial";
};

const paidFeaturedBusinesses = new Set(["Spa City Aesthetics"]);

export function getPlacementType(
  business: string,
  fallback: "paid" | "editorial" = "editorial"
) {
  return paidFeaturedBusinesses.has(business) ? "paid" : fallback;
}

export function businessClickTracking({
  action,
  business,
  city = "Hot Springs",
  page,
  placement,
  placementType,
}: BusinessClickTrackingInput) {
  return {
    "data-track-action": action,
    "data-track-business": business,
    "data-track-city": city,
    "data-track-event": "business_click",
    ...(page ? { "data-track-page": page } : {}),
    "data-track-placement": placement,
    "data-track-placement-type": placementType ?? getPlacementType(business),
  };
}
