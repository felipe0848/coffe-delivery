import { MapPin } from 'phosphor-react'
import logoCoffeDelivery from '../../assets/Logo-CofeeDelivery.svg'
import { ActionsContainer, HeaderContainer } from './style'
import { CartControl } from './components/cart-control'
import { NavLink } from 'react-router-dom'
export function Header() {
  return (
    <HeaderContainer>
      <NavLink to={'/'} data-testid="logo-anchor">
        <img src={logoCoffeDelivery} alt="" />
      </NavLink>
      <ActionsContainer>
        <div title="localização atual">
          <MapPin size={22} weight="fill" />
          <p>Campo Grande, MS</p>
        </div>
        <NavLink to={'/checkout'}>
          <CartControl />
        </NavLink>
      </ActionsContainer>
    </HeaderContainer>
  )
}
