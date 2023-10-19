import styled from 'styled-components'

export const MainCheckoutContainer = styled.main`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  > aside {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 28rem;
  }
  > section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`
export const ErrorMessage = styled.span`
  color: ${(props) => props.theme.danger};
  font-size: 0.875rem;
  padding-top: 0.5rem;
  padding-left: 0.5rem;
`
