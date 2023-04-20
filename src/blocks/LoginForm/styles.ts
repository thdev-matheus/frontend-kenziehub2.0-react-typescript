import styled from "styled-components";

export const Container = styled.div`
  @media (min-width: 320px) {
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
    width: 23rem;
    height: 31.3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    border-radius: 0.5rem;

    background-color: ${(props) => props.theme.gray3};

    & > h1 {
      font-size: 16pt;

      color: ${(props) => props.theme.gray0};
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;
