import { render, screen } from '@testing-library/react'
import { CoffeList } from '../coffe-list'
import '@testing-library/jest-dom'

jest.mock('../../../../db', () => ({
  ...jest.requireActual('../../../../db'),
  data: [
    {
      id: 'e1f7a333-bea7-4b12-aa57-e11f619781b9',
      name: 'Expresso Tradicional',
      description: 'O tradicional café feito com água quente e grãos moídos',
      priceInCents: 990,
      imgUrl: '/coffes/Expresso.png',
      tags: ['Tradicional'],
    },
  ],
}))

describe('CoffeList', () => {
  it('should render correctly', () => {
    render(<CoffeList />)
    expect(screen.getByText('Expresso Tradicional')).toBeInTheDocument()
    expect(screen.queryByText('Expresso Americano')).not.toBeInTheDocument()
  })
})
