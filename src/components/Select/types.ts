import { Dispatch, SetStateAction } from "react";

export interface ISelectProps {
  label?: string;
  setAction: Dispatch<SetStateAction<string>>;
  activeOpt: string;
  options: string[];

  width?: string;
  height?: string;

  margin?: string;

  borderRadius?: string;
  borderColor?: string;

  fontSize?: string;

  color?: string;
  bgColor?: string;

  hColor?: string;
  hBgColor?: string;
}

export interface IContainerProps {
  width?: string;
  height?: string;

  margin?: string;

  borderRadius?: string;
  borderColor?: string;

  fontSize?: string;

  color?: string;
  bgColor?: string;

  hColor?: string;
  hBgColor?: string;
}
