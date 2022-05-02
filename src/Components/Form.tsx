import { useState, useEffect } from "react";
import Button from "./Button";
import SelectInput from "./SelectInput";
import {
  CityOptions,
  ExperienceOptions,
  OccupationsOptions,
  YearOptions,
  SubmitButton
} from "../Maps/inputs"
import { GetGrossSalary, NetSalary } from "../utils"

function Form() {
  const [experienceYear, setExperienceYear] = useState("0-3")
  const [incomeYear, setIncomeYear] = useState("2020")
  const [occupation, setOccupation] = useState("Developer")
  const [city, setCity] = useState("Stockholm")

  const submit = (e) => {
    e.preventDefault();
    const grossSalary = GetGrossSalary(occupation, experienceYear);
    const netSalary = NetSalary(grossSalary, city, incomeYear)

    return {
      gross: grossSalary,
      net: netSalary
    }
  }

  return (
    <form onSubmit={submit}>
      <SelectInput value={experienceYear} onChangeMethod={e => {setExperienceYear(e.target.value)}} map={ExperienceOptions} />
      <SelectInput value={incomeYear} onChangeMethod={e => {setIncomeYear(e.target.value)}} map={YearOptions} />
      <SelectInput value={occupation} onChangeMethod={e => {setOccupation(e.target.value)}} map={OccupationsOptions} />
      <SelectInput value={city} onChangeMethod={e => {setCity(e.target.value)}} map={CityOptions} />
      <Button map={SubmitButton} />
    </form>
  );
}

export default Form;
