import styled from 'styled-components'

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
          font-family: 'roboto';
          color: ${(props) => props.theme['base-text']};
          font-size: 0.75rem;
          text-transform: uppercase;
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
