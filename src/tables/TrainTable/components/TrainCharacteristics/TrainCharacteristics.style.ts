import { styled } from 'styled-components'

export const Layout = styled.div`
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const TableBox = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
`

export const MainTitle = styled.h2`
  color: #000000;
`

export const TableWrapper = styled.table`
  border-collapse: collapse;
  width: fit-content;
`
export const TableHead = styled.thead`
  background-color: #f3f6f4;
  display: block;
`

export const TableHeader = styled.th`
  color: #999999;
  padding: 10px 50px 10px 10px;
`

export const TableBody = styled.tbody`
  display: block;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
`

export const TableBodyElement = styled.td`
  color: #000000;
  border-top: solid 1px #f3f6f4;
  padding: 10px 50px 10px 10px;
  font-size: 15px;
  white-space: nowrap;
`