import styled from 'styled-components'

export const CartButton = styled.button`
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  position: relative;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  transition: background-color 100ms;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.yellow};
    filter: brightness(0.95);
  }
`
export const CartCount = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  line-height: 1.25rem;
  font-size: 0.75rem;
  font-weight: 700;

  position: absolute;
  right: -0.5rem;
  top: -0.5rem;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme['yellow-dark']};
  border-radius: 50%;
`
