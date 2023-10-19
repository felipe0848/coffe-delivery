import styled from 'styled-components'

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
const BaseInput = styled.div`
  display: flex;
  flex-direction: column;
  overflow: visible;
  > input {
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['base-button']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
  }

  > span {
    width: max-content;
  }
`
export const CepInput = styled(BaseInput)`
  grid-area: cep;
`
export const StreetInput = styled(BaseInput)`
  grid-area: street;
  > input {
    text-transform: capitalize;
  }
`
export const NumberInput = styled(BaseInput)`
  grid-area: number;
`
export const ComplementInput = styled(BaseInput)`
  grid-area: complement;
  > input {
    text-transform: capitalize;
  }
`
export const NeighborhoodInput = styled(BaseInput)`
  grid-area: neighborhood;
  > input {
    text-transform: capitalize;
  }
`
export const CityInput = styled(BaseInput)`
  grid-area: city;
  > input {
    text-transform: capitalize;
  }
`
export const UFInput = styled(BaseInput)`
  grid-area: UF;
  > input {
    text-transform: uppercase;
  }
  > span {
    width: fit-content;
  }
`
