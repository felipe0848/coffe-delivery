import styled from 'styled-components'

export const AsideContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 1.5rem;
  border-radius: 6px 44px;
  background: ${(props) => props.theme['base-card']};
`

export const CheckoutCoffeList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const SummaryOrders = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  > li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
    line-height: 1.3;
    > p {
      font-size: 0.875rem;
    }
    > strong {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
    }
  }
`

export const ButtonSubmit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.75rem 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;

  border: none;
  cursor: pointer;
  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
