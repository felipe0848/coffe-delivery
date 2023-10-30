import { Minus, Plus } from 'phosphor-react'
import { ButtonChangeQtd, InputQtdContainer } from './style'

interface InputQtdProps {
  qtd: number
  setQtd: (value: number) => void
}
export function InputQtd({ qtd, setQtd }: InputQtdProps) {
  return (
    <InputQtdContainer data-testid="InputQTD">
      <ButtonChangeQtd
        onClick={() => qtd !== 1 && setQtd(qtd - 1)}
        title="Diminuir quantidade"
        type="button"
      >
        <Minus size={14} />
      </ButtonChangeQtd>
      <input
        type="number"
        value={qtd}
        onChange={(e) => setQtd(Number(e.target.value))}
      />
      <ButtonChangeQtd
        onClick={() => setQtd(qtd + 1)}
        title="Aumentar quantidade"
        type="button"
      >
        <Plus size={14} />
      </ButtonChangeQtd>
    </InputQtdContainer>
  )
}
