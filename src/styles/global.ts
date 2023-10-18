import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box
}
:focus{
  /* outline: ${(props) => props.theme.yellow} solid 2px; */
  /* box-shadow: 0 0 0 2px ; */
}
body{
  font-family: 'roboto', sans-serif;
  background: ${(props) => props.theme.background};
  color: ${(props) => props.theme['base-text']};
  font-weight: 400;
  font-size: 1rem;
  padding: 0rem 10rem;
}
`
