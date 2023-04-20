import styled from "styled-components";
import * as T from "./types";

export const StyledLogo = styled.h1<T.ILogoProps>`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;

  color: ${(props) => props.theme.primary};
`;
