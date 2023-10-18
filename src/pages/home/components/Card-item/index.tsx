import { ShoppingCart } from 'phosphor-react'
import { DataType } from '../../../../db'
import {
  ActionsCardContainer,
  CardItemContainer,
  FooterCard,
  Tags,
} from './style'
import { InputQtd } from '../../../../components/input-qtd'
import { useContext } from 'react'
import { ProductsContext } from '../../../../context/ProductsContext'
import { formatPriceInReais } from '../../../../utils/formatPriceInReais'

interface CardItemProps {
  item: DataType
}

export function CardItem({ item }: CardItemProps) {
  const { addInCart } = useContext(ProductsContext)
  function handleAddInCart() {
    const product = {
      id: item.id,
      qtd: 1,
    }
    addInCart(product)
  }
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
          <p>R$</p> <strong>{formatPriceInReais(item.priceInCents)}</strong>
        </span>

        <ActionsCardContainer>
          <InputQtd />
          <button title="Adicionar ao carrinho" onClick={handleAddInCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </ActionsCardContainer>
      </FooterCard>
    </CardItemContainer>
  )
}
