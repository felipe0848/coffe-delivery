import { MapPinLine } from 'phosphor-react'
import {
  CepInput,
  CityInput,
  ComplementInput,
  FormContainer,
  FormHeaderContainer,
  InputsContainer,
  NeighborhoodInput,
  NumberInput,
  StreetInput,
  UFInput,
} from './styles'

export function FormAdress() {
  return (
    <FormContainer>
      <FormHeaderContainer>
        <MapPinLine size={22} />
        <div>
          <h4>Endereço de entrega</h4>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </FormHeaderContainer>
      <InputsContainer>
        <CepInput type="text" placeholder="CEP" />
        <StreetInput type="text" placeholder="Rua" />
        <NumberInput type="Number" placeholder="Número" />
        <ComplementInput type="text" placeholder="Complemento" />
        <NeighborhoodInput type="text" placeholder="Bairro" />
        <CityInput type="text" placeholder="Cidade" />
        <UFInput type="text" placeholder="UF" />
      </InputsContainer>
    </FormContainer>
  )
}
