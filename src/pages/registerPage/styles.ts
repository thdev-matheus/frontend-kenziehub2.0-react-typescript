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
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5rem;

    overflow: hidden auto;

    padding: 5rem 0;

    background-color: ${(props) => props.theme.gray4};

    ::-webkit-scrollbar {
      display: none;
    }
  }

  @media (min-width: 1440px) {
  }

  @media (min-width: 1900px) {
  }
`;

export const BoxHeaderRegister = styled.div`
  width: 23rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
