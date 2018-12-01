/**
 * Reaturns affordability status based on price
 * @param {String} price
 * @returns {String}
 */
export const affordability = price => {
  switch (price.length) {
    case 1:
      return "Cheap"
    case 2:
      return "Affordable"
    case 3:
      return "Premium"
    default:
      return "Luxury"
  }
}
