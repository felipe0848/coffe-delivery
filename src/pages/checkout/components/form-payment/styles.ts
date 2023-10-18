import styled from 'styled-components'

export const FormPaymentContainer = styled.div`
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
export const PaymentHeader = styled.header`
  display: flex;
  gap: 0.5rem;
  > svg {
    color: ${(props) => props.theme.purple};
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
export const PaymentContent = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;
  align-items: center;
`
export const OptionPayment = styled.button`
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
`
