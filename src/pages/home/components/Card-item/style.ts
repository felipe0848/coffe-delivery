import styled from 'styled-components'

export const CardItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  padding: 1.25rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 0.375rem 2.25rem;
  line-height: 130%;

  > img {
    margin-top: -2.5rem;
    width: 120px;
  }

  > strong {
    margin-top: 1rem;
    font-family: 'Baloo 2';
    font-size: 1.25rem;
    font-weight: 700;

    color: ${(props) => props.theme['base-subtitle']};
  }
  > p {
    margin-top: 0.5rem;
    text-align: center;
    font-size: 0.875rem;

    color: ${(props) => props.theme['base-label']};
  }
`
export const Tags = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  > span {
    margin-top: 0.75rem;
    text-transform: uppercase;
    font-size: 0.625rem;
    font-weight: 700;

    padding: 0.25rem 0.5rem;
    border-radius: 100px;

    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
  }
`
export const FooterCard = styled.footer`
  margin-top: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  > span {
    display: flex;
    gap: 0.25rem;
    color: ${(props) => props.theme['base-text']};
    p {
      font-size: 0.875rem;
    }
    strong {
      font-family: 'Baloo 2';
      font-size: 1.5rem;
      font-weight: 800;
    }
  }
`
export const ActionsCardContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  > button {
    line-height: 0;
    border: none;

    padding: 0.5rem;
    border-radius: 6px;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['purple-dark']};

    cursor: pointer;
    transition: background-color 100ms;
    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
