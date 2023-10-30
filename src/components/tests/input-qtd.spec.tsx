import { fireEvent, render, screen } from '@testing-library/react'
import { InputQtd } from '../input-qtd'
import '@testing-library/jest-dom'
const mockSetQtd = jest.fn()
describe('InputQtd', () => {
  it('should render correctly', () => {
    render(<InputQtd qtd={1} setQtd={mockSetQtd} />)
    expect(screen.getByTestId('InputQTD')).toBeInTheDocument()
    expect(screen.getByTestId('InputQTDContainer')).toBeInTheDocument()
    expect(screen.getByTitle('Aumentar quantidade')).toBeInTheDocument()
    expect(screen.getByTitle('Diminuir quantidade')).toBeInTheDocument()
  })
  it('should increment qtd on click in btnPlus', () => {
    render(<InputQtd qtd={1} setQtd={mockSetQtd} />)
    const btnPlus = screen.getByTitle('Aumentar quantidade')
    fireEvent.click(btnPlus)
    expect(mockSetQtd).toHaveBeenCalledWith(2)
  })
  it('should decrement qtd on click in btnMinus', () => {
    render(<InputQtd qtd={2} setQtd={mockSetQtd} />)
    const btnMinus = screen.getByTitle('Diminuir quantidade')
    fireEvent.click(btnMinus)
    expect(mockSetQtd).toHaveBeenCalledWith(1)
  })
  it('should keep qtd not negative', () => {
    render(<InputQtd qtd={1} setQtd={mockSetQtd} />)
    const btnMinus = screen.getByTitle('Diminuir quantidade')
    fireEvent.click(btnMinus)
    expect(mockSetQtd).toHaveBeenCalledTimes(0)
  })
})
