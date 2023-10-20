import styled from 'styled-components'

export const IntroContainer = styled.section`
  display: flex;
  flex: 1;
  justify-content: space-between;
  gap: 2.5rem;
  img {
    max-width: 46%;
  }
  @media (max-width: 575px) {
    flex-wrap: wrap;
    justify-content: center;

    img {
      max-width: 80%;
    }
  }
`
export const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  /* width: 54%; */
  > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    line-height: 1.3;
    > strong {
      color: ${(props) => props.theme['base-title']};
      font-family: 'Baloo 2';
      font-size: 3rem;
      font-weight: 800;
    }
    > p {
      color: ${(props) => props.theme['base-subtitle']};
      font-size: 1.25rem;
    }
  }
`
export const IntroList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  list-style: none;
  row-gap: 1.25rem;
`
const spanColor = {
  'yellow-dark': 'yellow-dark',
  yellow: 'yellow',
  gray: 'base-text',
  purple: 'purple',
} as const

interface IntroListItemProps {
  $color: keyof typeof spanColor
}
export const IntroListItem = styled.li<IntroListItemProps>`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  > span {
    padding: 0.5rem;
    border-radius: 50%;
    line-height: 0;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme[spanColor[props.$color]]};
  }
`
export const IntroBackground = styled.div`
  position: absolute;
  width: 100vw;
  left: 0;
  filter: blur(80px);
  img {
    max-height: 34rem;
    max-width: 100%;
  }
`
