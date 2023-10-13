import styled from 'styled-components'

export const CoffeListContainer = styled.section`
  margin-top: 7.75rem;
  > h2 {
    color: ${(props) => props.theme['base-subtitle']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;
  }
`
export const CardList = styled.ul`
  margin-top: 3.4rem;
  display: flex;
  gap: 2.5rem 2rem;
  flex-wrap: wrap;
  list-style: none;
`
