import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import imageCofee from '../../../../assets/Image-coffe.png'
import imageBackground from '../../../../assets/Background.svg'
import {
  IntroBackground,
  IntroContainer,
  IntroList,
  IntroListItem,
  IntroTextContainer,
} from './style'
export function IntroHome() {
  return (
    <IntroContainer>
      <IntroTextContainer>
        <div>
          <strong>Encontre o café perfeito para qualquer hora do dia</strong>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </div>
        <IntroList>
          <IntroListItem $color="yellow-dark">
            <span>
              <ShoppingCart weight="fill" size={16} />
            </span>
            <p>Compra simples e segura</p>
          </IntroListItem>
          <IntroListItem $color="gray">
            <span>
              <Package weight="fill" size={16} />
            </span>
            <p>Embalagem mantém o café intacto</p>
          </IntroListItem>
          <IntroListItem $color="yellow">
            <span>
              <Timer weight="fill" size={16} />
            </span>
            <p>Entrega rápida e rastreada</p>
          </IntroListItem>
          <IntroListItem $color="purple">
            <span>
              <Coffee weight="fill" size={16} />
            </span>
            <p>O café chega fresquinho até você</p>
          </IntroListItem>
        </IntroList>
      </IntroTextContainer>
      <img src={imageCofee} alt="" />
      <IntroBackground>
        <img src={imageBackground} alt="" />
      </IntroBackground>
    </IntroContainer>
  )
}
