import styled from "styled-components";
import * as T from "./types";

export const Container = styled.div<T.ISInputProps>`
  width: ${(props) => props.width || "100%"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  & > div {
    display: flex;

    & > span {
      font-size: 10pt;
      font-weight: 400;

      color: ${(props) => props.theme.gray0};

      & > span {
        color: ${(props) => props.theme.error};
      }
    }
  }

  & > input {
    width: 100%;
    height: 3rem;

    padding: 0 0.5rem;

    border: 1.5px solid ${(props) => props.theme.gray0};
    border-radius: 0.5rem;

    background-color: ${(props) => props.theme.gray2};
    color: ${(props) => props.theme.gray0};

    & > :focus {
    }
  }
`;
