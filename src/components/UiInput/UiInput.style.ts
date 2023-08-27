import { styled } from 'styled-components'

export const Input = styled.input`
  padding: 5px;
  border: none;
  max-width: 80px;
  outline: solid 0.2px #858181;
  border-radius: 3px;

  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
`
