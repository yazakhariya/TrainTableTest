import { styled } from 'styled-components'

export const ElementInput = styled.input`
  padding: 5px;
  border: none;
  max-width: 80px;

  &&:focus {
    outline: solid 1px #858181;
    border-radius: 3px;
  }

  &&::-webkit-outer-spin-button,
  &&::-webkit-inner-spin-button {
    display: none;
    -webkit-appearance: none;
    margin: 0;
  }
`
