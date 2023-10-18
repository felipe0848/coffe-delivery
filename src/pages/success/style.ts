import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  gap: 6.5rem;
  margin-top: 5rem;
  align-items: flex-end;
  > div {
    margin-bottom: -1.15rem;
  }
`
export const SuccessTextSection = styled.section`
  line-height: 1.3;
  > h3 {
    color: ${(props) => props.theme['yellow-dark']};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
  }
  > p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    margin-top: 0.25rem;
  }
`
export const DeliveryInfos = styled.div`
  margin-top: 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border-radius: 6px 36px;
  > div {
    display: flex;
    gap: 0.75rem;
    align-items: center;
    color: ${(props) => props.theme['base-text']};
  }

  position: relative;
  background-clip: padding-box;
  background: ${(props) => props.theme.background};

  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(
      135deg,
      ${(props) => props.theme['yellow-dark']},
      ${(props) => props.theme.purple}
    );
  }
`

const spanColor = {
  purple: 'purple',
  yellow: 'yellow',
  'yellow-dark': 'yellow-dark',
} as const
interface SpanIconProps {
  $color: keyof typeof spanColor
}

export const SpanIcon = styled.span<SpanIconProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;

  border-radius: 50%;
  color: ${(props) => props.theme.background};
  background: ${(props) => props.theme[spanColor[props.$color]]};
`
