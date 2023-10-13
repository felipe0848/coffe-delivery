import { ShoppingCart } from 'phosphor-react'
import { DataType } from '../../../../db'
import {
  ActionsCardContainer,
  CardItemContainer,
  FooterCard,
  Tags,
} from './style'
import { InputQtd } from '../input-qtd'

interface CardItemProps {
  item: DataType
}

export function CardItem({ item }: CardItemProps) {
  return (
    <CardItemContainer key={item.id}>
      <img src={item.imgUrl} alt="" />
      <Tags>
        {item.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <strong>{item.name}</strong>
      <p>{item.description}</p>

      <FooterCard>
        <span>
          <p>R$</p> <strong>{(item.priceInCents / 100).toFixed(2)}</strong>
        </span>

        <ActionsCardContainer>
          <InputQtd />
          <button title="Adicionar ao carrinho">
            <ShoppingCart size={22} weight="fill" />
          </button>
        </ActionsCardContainer>
      </FooterCard>
    </CardItemContainer>
  )
}
