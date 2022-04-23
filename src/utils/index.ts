import {OCCUPATION, EXPERIENCE} from "../enum/"

const basicSalary= {
    [OCCUPATION.DEVELOPER]: 30000,
    [OCCUPATION.TEACHER]: 27000,
    [OCCUPATION.CASHIER]: 25000
  }

const extraSalary = {
  [EXPERIENCE.CLASS_ONE]: 1,
  [EXPERIENCE.CLASS_TWO]: 1.2,
  [EXPERIENCE.CLASS_THREE]: 1.4,
  [EXPERIENCE.CLASS_FOUR]: 1.6
}

const taxLocationMap = {
  Stockholm: {
    2019: 0.3,
    2020: 0.29
  },
  Gothenburg: {
    2019: 0.25,
    2020: 0.22
  }
}

export const GetGrossSalary = (occupation, experience) => basicSalary[occupation] * extraSalary[experience]

/**
 *
 * @param grossSalary
 * @param location
 * @returns amountOfTax
 */
export const CalculateTaxAmount = (grossSalary, location) => {
  const excess = grossSalary - 36000;

  if (excess < 0) { // Less than SEK36,000
    return grossSalary * taxLocationMap[location];
  } else {
    const basicTax = 36000 * taxLocationMap[location];
    const excessTax = excess * 0.5;

    if (excess <= 9000) { // SEK36,000 - SEK45,000
      return basicTax + excessTax;
    } else { // SEK45,000+
      const highExcess = excess - 9000;
      const highIncomeTax = highExcess * 0.7;

      return basicTax + excessTax + highIncomeTax;
    }
  }
}


export const NetSaraly = (grossAmount, location) => {
  const tax = CalculateTaxAmount(grossAmount, location)

  return grossAmount - (grossAmount * tax);
}