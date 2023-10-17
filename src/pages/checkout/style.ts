import styled from 'styled-components'

export const MainCheckoutContainer = styled.main`
  display: flex;
  gap: 1rem;
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
export const FormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  gap: 2rem;

  border-radius: 6px;
  background: ${(props) => props.theme['base-card']};

  & + & {
    margin-top: 0.75rem;
  }
`
export const FormHeaderContainer = styled.header`
  display: flex;
  gap: 0.5rem;
  > svg {
    color: ${(props) => props.theme['yellow-dark']};
  }
  > div {
    line-height: 1.3;
    > h4 {
      font-size: 1rem;
      font-weight: 400;
    }
    > p {
      font-size: 0.875rem;
    }
  }
`

export const InputsContainer = styled.div`
  max-width: 35rem;
  display: grid;
  grid-template-columns: 1fr 2fr 60px;
  grid-template-areas:
    'cep _ _'
    'street street street'
    'number complement complement'
    'neighborhood city UF';
  gap: 1rem 0.75rem;
`
const BaseInput = styled.input`
  padding: 0.75rem;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};
  background: ${(props) => props.theme['base-input']};
`
export const CepInput = styled(BaseInput)`
  grid-area: cep;
`
export const StreetInput = styled(BaseInput)`
  grid-area: street;
`
export const NumberInput = styled(BaseInput)`
  grid-area: number;
`
export const ComplementInput = styled(BaseInput)`
  grid-area: complement;
`
export const NeighborhoodInput = styled(BaseInput)`
  grid-area: neighborhood;
`
export const CityInput = styled(BaseInput)`
  grid-area: city;
`
export const UFInput = styled(BaseInput)`
  grid-area: UF;
`
export const PaymentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;
  align-items: center;
  > button {
    flex: 1;
    display: flex;
    gap: 0.75rem;
    padding: 1rem;

    border-radius: 6px;
    background: ${(props) => props.theme['base-button']};
    border: 1px solid transparent;

    color: ${(props) => props.theme['base-text']};
    font-size: 0.75rem;
    line-height: 1.6;
    text-transform: uppercase;
    font-family: 'roboto';

    > svg {
      color: ${(props) => props.theme.purple};
    }
    cursor: pointer;
    &:hover {
      background: ${(props) => props.theme['base-hover']};
    }
    &:focus {
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
    }
  }
`
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
export const CheckoutCoffeCard = styled.ul`
  display: flex;
  padding: 0.5rem 0.25rem;
  justify-content: space-between;
  > div {
    display: flex;
    gap: 1.25rem;
    > img {
      width: 4rem;
      height: 4rem;
    }
    > div {
      > strong {
        color: ${(props) => props.theme['base-subtitle']};
        font-weight: 400;
      }
      > div {
        margin-top: 0.5rem;
        display: flex;
        gap: 0.5rem;
        > button {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;

          height: 2rem;
          padding: 0rem 0.5rem;
          border-radius: 6px;
          background: ${(props) => props.theme['base-button']};
          border: 1px solid transparent;
          > svg {
            color: ${(props) => props.theme.purple};
          }
          cursor: pointer;
          &:hover {
            background: ${(props) => props.theme['base-hover']};
          }
        }
      }
    }
  }
  > span {
    color: ${(props) => props.theme['base-text']};
    font-weight: 700;
  }
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};
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
