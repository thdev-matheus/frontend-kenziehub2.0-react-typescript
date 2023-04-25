import { useState } from "react";
import * as T from "./types";
import * as S from "./styles";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export const Select = ({
  label,
  options,
  activeOpt,
  setAction,
  bgColor,
  borderRadius,
  color,
  fontSize,
  hBgColor,
  hColor,
  height,
  margin,
  width,
  borderColor,
}: T.ISelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleIsOpen = () => setIsOpen(!isOpen);

  return (
    <S.Container color={color}>
      {label && <span>{label}</span>}
      <S.Dropdown>
        <S.Toggle
          borderRadius={borderRadius}
          color={color}
          bgColor={bgColor}
          fontSize={fontSize}
          hColor={hColor}
          hBgColor={hBgColor}
          borderColor={borderColor}
          onClick={toggleIsOpen}
        >
          {activeOpt}
          {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </S.Toggle>

        {isOpen && (
          <S.Menu
            width={width}
            height={height}
            margin={margin}
            bgColor={bgColor}
          >
            {options.map((option, index) => (
              <span
                key={index}
                onClick={() => {
                  setAction(option);
                  setIsOpen(false);
                }}
              >
                {option}
              </span>
            ))}
          </S.Menu>
        )}
      </S.Dropdown>
    </S.Container>
  );
};
