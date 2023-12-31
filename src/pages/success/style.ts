import styled from 'styled-components'

export const SuccessContainer = styled.main`
  display: flex;
  gap: 6.5rem;
  margin-top: 5rem;
  align-items: flex-end;
  > div {
    flex: 1;
    margin-bottom: -1.15rem;
  }
  @media (max-width: 645px) {
    flex-direction: column-reverse;
    align-items: center;
    > div > img {
      width: 100%;
    }
  }
`
export const SuccessTextSection = styled.section`
  line-height: 1.3;
  flex: 1;
  min-width: 50%;
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
