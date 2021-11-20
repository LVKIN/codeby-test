export function formatPrice (price) {
  let finalPrice = (price / 100).toFixed(2);
  finalPrice = finalPrice.toString();
  finalPrice = finalPrice.replace('.', ',');

  return finalPrice;
};