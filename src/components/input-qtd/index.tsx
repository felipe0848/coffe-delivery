import { Minus, Plus } from 'phosphor-react'
import { ButtonChangeQtd, InputQtdContainer } from './style'
import { useState } from 'react'

export function InputQtd() {
  const [qtd, setQtd] = useState(1)

  return (
    <InputQtdContainer>
      <ButtonChangeQtd
        onClick={() => qtd !== 1 && setQtd((state) => state - 1)}
        title="Diminuir quantidade"
      >
        <Minus size={14} />
      </ButtonChangeQtd>
      <input
        type="number"
        value={qtd}
        onChange={(e) => setQtd(Number(e.target.value))}
      />
      <ButtonChangeQtd
        onClick={() => setQtd((state) => state + 1)}
        title="Aumentar quantidade"
      >
        <Plus size={14} />
      </ButtonChangeQtd>
    </InputQtdContainer>
  )
}
