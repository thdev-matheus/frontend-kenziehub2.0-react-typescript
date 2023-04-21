import styled, { css } from "styled-components";
import * as T from "./types";

export const Container = styled.div<T.ISInputProps>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "3rem"};

  text-align: left;

  background-color: ${(props) => props.bgColor};

  & > div {
    margin-bottom: 0.2rem;
    padding-left: 1rem;

    color: ${(props) => props.color || props.theme.gray0};

    font-weight: bold;

    & > span {
      font-size: 7pt;
      color: ${(props) => props.theme.error};

      @media (min-width: 767px) {
        font-size: 9pt;
      }
    }
  }
`;

export const inputContainer = styled.div<T.ISInputProps>`
  width: 100%;
  height: 90%;

  display: flex;
  align-items: center;
  padding: 0.5rem;

  border: 1.5px solid ${(props) => props.borderColor || props.theme.gray0};
  border-radius: ${(props) => props.borderRadius || "0.8rem"};

  transition: 0.4s;

  ${(props) =>
    props.isErrored &&
    css`
      border-color: ${(props) => props.theme.error};

      & > svg {
        color: ${(props) => props.theme.error};
      }
    `}

  & > input {
    width: 80%;

    flex: 1;
    align-items: center;

    border: none;
    outline: none;

    background: transparent;
    color: ${(props) => props.theme.gray0};

    ::placeholder {
      color: ${(props) => props.theme.gray1};
    }

    ::-webkit-inner-spin-button {
      display: none;
    }
  }

  & > svg {
    margin-right: 0.5rem;

    font-size: ${(props) => props.iconSize || "18pt"};

    cursor: ${(props) => (props.iconAction ? "pointer" : "default")};

    transition: 0.5s;

    :hover {
      color: ${(props) =>
        props.iconAction ? props.theme.gray1 : props.theme.gray0};

      transition: 0.8s;
    }
  }

  .password_eye {
    cursor: pointer;
  }
`;

// export const Container = styled.div<T.ISInputProps>`
//   width: ${(props) => props.width || "100%"};
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
//   gap: 1rem;

//   & > div {
//     display: flex;

//     & > span {
//       font-size: 10pt;
//       font-weight: 400;

//       color: ${(props) => props.theme.gray0};

//       & > span {
//         color: ${(props) => props.theme.error};
//       }
//     }
//   }

//   & > input {
//     width: 100%;
//     height: 3rem;

//     padding: 0 0.5rem;

//     border: 1.5px solid ${(props) => props.theme.gray0};
//     border-radius: 0.5rem;

//     background-color: ${(props) => props.theme.gray2};
//     color: ${(props) => props.theme.gray0};

//     & > :focus {
//     }
//   }
// `;
