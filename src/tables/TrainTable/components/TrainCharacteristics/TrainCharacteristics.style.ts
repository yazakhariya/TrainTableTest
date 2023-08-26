import { styled } from 'styled-components'

export const TableBox = styled.div`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
`

export const TableTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h2`
  color: #000000;
`

export const SubTitle = styled.h2`
  color: #000000;
`
export const ImageWrapper = styled.div`
  padding: 10px;
  cursor: pointer;
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
  padding: 10px 60px 10px 8px;
  vertical-align: middle;
  text-align: center;
`

export const TableBody = styled.tbody`
  display: block;
  height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  width: 500px;
`

export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Button = styled.button`
  background-color: #ffffff;
  padding: 10px;
  border-radius: 10px;
  border: solid 1px #000000;
  width: fit-content;
`
