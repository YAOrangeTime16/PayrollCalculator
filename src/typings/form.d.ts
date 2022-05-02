
export interface ISelectInputOptioProps {
  map: ISelectInputOptioPropsMap;
  value: any;
  onChangeMethod?: (event) => void
}

export interface ISelectInputOptioPropsMap {
  label: string;
  options: string[];
}

export interface IButtonProps {
  map: IButtonPropsMap;
}

export interface IButtonPropsMap {
  label: string;
  type: TButtonType;
}

type TButtonType = "submit" | "button";