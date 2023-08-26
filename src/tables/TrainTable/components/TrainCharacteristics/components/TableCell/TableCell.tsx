import * as React from 'react'
import * as S from './TableCell.style'

type Props = {
  speed?: number
  force?: number
  engine?: number
  index: number
  block: React.Dispatch<React.SetStateAction<boolean>>
  set: React.Dispatch<React.SetStateAction<unknown[]>>
}

const TableCell = ({ speed, force, engine, index, block, set }: Props) => {
  const [cellValueSpeed, setCellValueSppeed] = React.useState(speed)
  const [cellValueForce, setCellValueForce] = React.useState(force)
  const [cellValueEngineAmperage, setCellValueEngineAmperage] =
    React.useState(engine)

  const inputSpeedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setCellValueSppeed(Number(value.slice(0, 9)))
    const cell: HTMLElement = event.target
    if (!Number.isInteger(cellValueSpeed)) {
      cell.style.backgroundColor = 'red'
      block(true)
    } else {
      cell.style.backgroundColor = 'white'
      block(false)
    }
    set((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }))
  }

  const inputForceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setCellValueForce(Number(value.slice(0, 9)))
    const cell: HTMLElement = event.target
    if (Number.isInteger(cellValueForce)) {
      cell.style.backgroundColor = 'red'
      block(true)
    } else {
      cell.style.backgroundColor = 'white'
      block(false)
    }
  }

  const inputEngineHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setCellValueEngineAmperage(Number(value.slice(0, 9)))
    const cell: HTMLElement = event.target
    if (!Number.isInteger(cellValueEngineAmperage)) {
      cell.style.backgroundColor = 'red'
      block(true)
    } else {
      cell.style.backgroundColor = 'white'
      block(false)
    }
  }

  return (
    <S.TableBodyElement>
      <S.ElementInput
        value={cellValueSpeed}
        onChange={(event) => inputSpeedHandler(event)}
        type="number"
        name={`${index}`}
      />
      <S.ElementInput
        value={cellValueForce}
        onChange={(event) => inputForceHandler(event)}
        type="number"
      />
      <S.ElementInput
        value={cellValueEngineAmperage}
        onChange={(event) => inputEngineHandler(event)}
        type="number"
      />
    </S.TableBodyElement>
  )
}

export default TableCell
