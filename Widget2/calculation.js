const pensionAge = 67;
const occupationFactorMapping = {
  fe: 0.001,
  be: 0.0015,
  gd: 0.002,
  vd: 0.0025,
};

/**
 * Get the factor based on choosen occupation
 * @param {String} occupation
 * @returns {Number} occupationFactor
 */
const getOccupationFactor = (occupation) => {
  return occupationFactorMapping[occupation]
};

/**
 * Get amount of years till the pension age
 * @param {Number} age
 * @returns {Number} amount of years till pension
 */
const getYearsTillPension = (age) => {
  return 67 - age;
};

/**
 * Calculate the gross and net premium
 *
 * yearlyGrossPremium = yearlyIncome * yearsTillPension * occupationFactor;
 * yearlyNetPremium = yearlyGrossPremium / 1.21;
 *
 * The premium amounts are rounded to the largest integer less than or equal to a given number
 *
 * @param {Object} data { occupation, birthdate, age, yearlyIncome }
 * @returns
 */
export const calculatePremium = (data) => {
const yearlyGrossPremium = Math.floor(Number(data.yearlyIncome) * getYearsTillPension(Number(data.age)) * getOccupationFactor(data.occupation));
const yearlyNetPremium = Math.floor(yearlyGrossPremium / 1.21)
  return {
    grossPremium: yearlyGrossPremium,
    netPremium: yearlyNetPremium,
  };
};
