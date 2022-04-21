import { useState } from "react";
import Button from "./Button";
import SelectInput from "./SelectInput";
import {
  CityOptions,
  ExperienceOptions,
  OccupationsOptions,
  YearOptions,
  SubmitButton
} from "../Maps/inputs"

function Form() {

  const [experienceYear, setExperienceYear] = useState("0-3")
  const [incomeYear, setIncomeYear] = useState("2020")
  const [occupation, setOccupation] = useState("Developer")
  const [city, setCity] = useState("Stockholm")

  return (
    <form onSubmit={(e) => e.preventDefault() }>
      <SelectInput value={experienceYear} map={ExperienceOptions} />
      <SelectInput value={incomeYear} map={YearOptions} />
      <SelectInput value={occupation} map={OccupationsOptions} />
      <SelectInput value={city} map={CityOptions} />
      <Button map={SubmitButton} />
    </form>
  );
}

export default Form;
