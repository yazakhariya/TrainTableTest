import { styled } from 'styled-components'

export const TableBodyElement = styled.td`
  color: #000000;
  border-top: solid 1px #f3f6f4;
  vertical-align: middle;
  text-align: center;
  font-size: 15px;
  white-space: nowrap;
  display: flex;
  gap: 10px;
  padding: 10px 40px;
`

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
