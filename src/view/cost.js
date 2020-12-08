export const createCost = (points) => {
  let tripCost = 0;
  let offersCost = 0;
  points.forEach((point) => {
    tripCost += point.price;
    return tripCost;
  });
  points.forEach((point) => {
    const {offers} = point;
    if (offers.length > 0) {
      offers.forEach((offer) => {
        offersCost += offer.cost;
        return offersCost;
      });
    }
  });
  let totalCost = tripCost + offersCost;

  return `<p class="trip-info__cost">
  Total: &euro;&nbsp;<span class="trip-info__cost-value">${totalCost}</span>
</p>`;
};
