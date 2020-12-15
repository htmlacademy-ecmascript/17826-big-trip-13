export const createHeaderCost = (points) => {
  const tripCost = 0;
  let offersCost = 0;

  const totalTripCost = points.reduce((total, current) => total + current.price, tripCost);

  points.forEach((point) => {
    const {offers} = point;
    if (offers.length > 0) {
      offers.forEach((offer) => {
        offersCost += offer.cost;
        return offersCost;
      });
    }
  });

  // const totalOffersCost = getTotalOffersCost(points);
  const totalCost = totalTripCost;

  return `<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
</p>`;
};
