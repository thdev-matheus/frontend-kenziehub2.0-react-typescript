import styled from "styled-components";
import * as T from "./types";

export const Container = styled.button<T.ISButtonProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100%"};

  display: flex;
  flex-direction: ${(props) => (props.iconAfter ? "row-reverse" : "row")};
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: ${(props) => props.borderRadius || "4px"};

  font-size: ${(props) => props.fontSize || "14pt"};
  font-weight: bold;

  color: ${(props) => props.color || props.theme.gray0};
  background-color: ${(props) => props.bgColor || props.theme.primary};

  cursor: pointer;

  transition: 0.5s;

  :hover {
    color: ${(props) => props.hColor || props.theme.gray0};
    background-color: ${(props) => props.hBgColor || props.theme.tertiary};

    transition: 0.8s;
  }

  :active {
    transform: scale(0.9);

    transition: 0s;
  }
`;
