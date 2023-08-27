import { styled } from 'styled-components'

export const Button = styled.button`
  background-color: #ffffff;
  padding: 5px;
  border-radius: 10px;
  border: solid 1px #000000;
  cursor: pointer;

  &&:active {
    background-color: #8bc4e7;
  }
`