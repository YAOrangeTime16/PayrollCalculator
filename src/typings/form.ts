
export interface ISelectInputOptioProps {
  map: ISelectInputOptioPropsMap;
  value: any;
  onChangeMethod?: (event) => void
}

interface ISelectInputOptioPropsMap {
  label: string;
  options: string[];
}

export interface IButtonProps {
  map: IButtonPropsMap;
}

interface IButtonPropsMap {
  label: string;
  type: TButtonType;
}

type TButtonType = "submit" | "button";