interface ISelectInputOptioProps {
  map: ISelectInputOptioPropsMap;
  value: any;
  onChange?: (event) => {}
}

interface ISelectInputOptioPropsMap {
  label: string;
  options: string[];
}

interface IButtonProps {
  map: IButtonPropsMap;
}

interface IButtonPropsMap {
  label: string;
  type: TButtonType;
}

type TButtonType = "submit" | "button";