import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 10rem;
`
export const ActionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  & > div {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;

    color: ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
    border-radius: 8px;

    p {
      color: ${(props) => props.theme['purple-dark']};
    }
  }
`
