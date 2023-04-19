import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 100%;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: ${(props) => props.theme.gray4};

    & > h1 {
      color: ${(props) => props.theme.gray0};
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const Box = styled.div``;
