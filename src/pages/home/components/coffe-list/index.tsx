import { CardList, CoffeListContainer } from './style'
import { data } from '../../../../db'
import { CardItem } from '../Card-item'

export function CoffeList() {
  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>
      <CardList>
        {data.map((item) => (
          <CardItem key={item.id} item={item} />
        ))}
      </CardList>
    </CoffeListContainer>
  )
}
