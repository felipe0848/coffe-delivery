import styled from 'styled-components'

export const MainCheckoutContainer = styled.main`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  > aside {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    flex: 1;
    > h3 {
      width: 100%;
    }
  }
  > section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;
  }
  @media (max-width: 1225px) {
    flex-wrap: wrap;
    input {
      font-size: 90%;
    }
  }
  @media (max-width: 425px) {
    input {
      font-size: 80%;
    }
  }
`
export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.danger};
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
`
