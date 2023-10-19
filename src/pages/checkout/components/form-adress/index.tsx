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
import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from '../../styles'
import { formDeliveryData } from '../..'

export function FormAdress() {
  const {
    register,
    formState: { errors },
  } = useFormContext<formDeliveryData>()
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
        <CepInput>
          <input type="text" placeholder="CEP" {...register('CEP')} />
          {errors.CEP?.message && (
            <ErrorMessage>* {errors.CEP?.message}</ErrorMessage>
          )}
        </CepInput>
        <StreetInput>
          <input type="text" placeholder="Rua" {...register('Street')} />
          {errors.Street?.message && (
            <ErrorMessage>* {errors.Street?.message}</ErrorMessage>
          )}
        </StreetInput>
        <NumberInput>
          <input type="Number" placeholder="Número" {...register('Number')} />
          {errors.Number?.message && (
            <ErrorMessage>* {errors.Number?.message}</ErrorMessage>
          )}
        </NumberInput>
        <ComplementInput>
          <input
            type="text"
            placeholder="Complemento"
            {...register('Complement')}
          />
          {errors.Complement?.message && (
            <ErrorMessage>* {errors.Complement?.message}</ErrorMessage>
          )}
        </ComplementInput>
        <NeighborhoodInput>
          <input
            type="text"
            placeholder="Bairro"
            {...register('Neighborhood')}
          />
          {errors.Neighborhood?.message && (
            <ErrorMessage>* {errors.Neighborhood?.message}</ErrorMessage>
          )}
        </NeighborhoodInput>
        <CityInput>
          <input type="text" placeholder="Cidade" {...register('City')} />
          {errors.City?.message && (
            <ErrorMessage>* {errors.City?.message}</ErrorMessage>
          )}
        </CityInput>
        <UFInput>
          <input type="text" placeholder="UF" {...register('UF')} />
          {errors.UF?.message && (
            <ErrorMessage>* {errors.UF?.message}</ErrorMessage>
          )}
        </UFInput>
      </InputsContainer>
    </FormContainer>
  )
}
