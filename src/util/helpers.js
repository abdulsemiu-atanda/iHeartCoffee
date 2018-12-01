/**
 * Reaturns affordability status based on price
 * @param {String} price
 * @returns {String}
 */
export const affordability = price => {
  switch (price.length) {
    case 1:
      return "Budget"
    case 2:
      return "Bargain"
    case 3:
      return "Premium"
    default:
      return "Luxury"
  }
}
