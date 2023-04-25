import * as T from "./types";
import styled from "styled-components";

export const Container = styled.div<T.IContainerProps>`
  width: "100%";

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.3rem;

  & > span {
    padding-left: 1rem;

    font-size: 12pt;
    font-weight: bold;

    color: ${(props) => props.color || props.theme.gray0};
  }
`;

export const Dropdown = styled.div<T.IContainerProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "3rem"};

  display: flex;
  flex-direction: column;
  // mudado de center para flex-start para corrigir a posição do menu
  justify-content: flex-start;
  align-items: center;

  position: relative;
`;

export const Toggle = styled.div<T.IContainerProps>`
  min-width: 100%;
  min-height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: absolute;
  /* top: 0; */

  padding: 0 1rem;

  border-radius: ${(props) => props.borderRadius || "4px"};
  border: 1.5px solid ${(props) => props.borderColor || props.theme.gray0};

  color: ${(props) => props.color || props.theme.gray0};

  font-size: ${(props) => props.fontSize || "14pt"};
  font-weight: bold;

  cursor: pointer;

  & > svg {
    font-size: 18pt;
  }
`;

export const Menu = styled.div<T.IContainerProps>`
  min-width: ${(props) => props.width || "100%"};

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 0.3rem;

  position: relative;
  top: 3.5rem;

  padding: 1.5rem;
  z-index: 9999;

  border-radius: 0.25rem;

  background-color: ${(props) => props.bgColor || props.theme.gray2};

  & > span {
    width: 100%;

    padding: 0.5rem;

    border-radius: 0.25rem;

    color: ${(props) => props.color || props.theme.gray0};
    cursor: pointer;

    transition: 0.8s;

    :hover {
      transform: scale(1.1);
      background-color: ${(props) => props.theme.gray3};

      transition: 0.8s;
    }
  }
`;
