import { ShoppingCart } from 'phosphor-react'
import { CardItem, CardList, CoffeListContainer, FooterCard } from './style'
import { data } from '../../../../db'

export function CoffeList() {
  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>
      <CardList>
        {data.map((item) => (
          <CardItem key={item.id}>
            <img src={item.imgUrl} alt="" />
            <div>
              {item.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <strong>{item.name}</strong>
            <p>{item.description}</p>
            <FooterCard>
              <span>
                <p>R$</p> <strong>{item.priceInCents / 100}</strong>
              </span>
              <div>
                <input type="number" name="" id="" defaultValue={1} />
                <button>
                  <ShoppingCart weight="fill" />
                </button>
              </div>
            </FooterCard>
          </CardItem>
        ))}
      </CardList>
    </CoffeListContainer>
  )
}
