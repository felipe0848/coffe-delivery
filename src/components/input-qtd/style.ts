import styled from 'styled-components'

export const InputQtdContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  width: 4.5rem;

  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};

  &:focus-within {
    outline: ${(props) => props.theme.purple} solid 2px;
  }
  > input[type='number'] {
    font-family: 'roboto';
    border: none;
    background: transparent;
    width: 1.25rem;
    text-align: center;
    color: ${(props) => props.theme['base-title']};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    -moz-appearance: textfield;
    &:focus {
      outline: none;
    }
  }
`
export const ButtonChangeQtd = styled.button`
  line-height: 0;
  border: none;
  color: ${(props) => props.theme.purple};
  background: transparent;

  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
  &:focus {
    outline: none;
  }
`
