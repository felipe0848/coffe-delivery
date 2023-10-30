import { render, screen } from '@testing-library/react'
import { Header } from '../header'
import '@testing-library/jest-dom'
import { BrowserRouter } from 'react-router-dom'
import { ProductsContextProvider } from '../../context/ProductsContext'

const mockNavigate = jest.fn()
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}))

describe('Header', () => {
  it('should render correctly', () => {
    render(
      <ProductsContextProvider>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </ProductsContextProvider>,
    )

    expect(screen.getByTestId('logo-anchor')).toBeInTheDocument()
    expect(screen.getByText('Campo Grande, MS')).toBeInTheDocument()
    expect(screen.getByTitle('Ir para o carrinho')).toBeInTheDocument()
  })
})
