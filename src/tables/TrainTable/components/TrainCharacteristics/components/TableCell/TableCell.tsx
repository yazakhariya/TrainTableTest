import * as React from 'react'
import * as S from './TableCell.style'

type Props = {
  speed?: number
  force?: number
  engine?: number
  index: number
  block: React.Dispatch<React.SetStateAction<boolean>>
  set: React.Dispatch<React.SetStateAction<unknown[]>>
  blocked: boolean
}

const TableCell = ({
  speed,
  force,
  engine,
  index,
  block,
  set,
  blocked,
}: Props) => {
  const [cellValueSpeed, setCellValueSppeed] = React.useState(speed)
  const [cellValueForce, setCellValueForce] = React.useState(force)
  const [cellValueEngineAmperage, setCellValueEngineAmperage] =
    React.useState(engine)
  const [editS, seteditS] = React.useState<boolean>(false)
  const [editF, seteditF] = React.useState<boolean>(false)
  const [editE, seteditE] = React.useState<boolean>(false)
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
      {!editS ? (
        <>
          <span>{cellValueSpeed}</span>
          <button
            onClick={() => seteditS(true)}
            disabled={blocked ? true : false}
          >
            edit
          </button>
        </>
      ) : (
        <>
          <S.ElementInput
            value={cellValueSpeed}
            onChange={(event) => inputSpeedHandler(event)}
            type="number"
            name={`${index}`}
          />
          <button
            onClick={() => seteditS(false)}
            disabled={blocked ? true : false}
          >
            ok
          </button>
        </>
      )}
      {!editF ? (
        <>
          <span>{cellValueForce}</span>
          <button
            onClick={() => seteditF(true)}
            disabled={blocked ? true : false}
          >
            edit
          </button>
        </>
      ) : (
        <>
          <S.ElementInput
            value={cellValueForce}
            onChange={(event) => inputForceHandler(event)}
            type="number"
          />
          <button
            onClick={() => seteditF(false)}
            disabled={blocked ? true : false}
          >
            ok
          </button>
        </>
      )}

      {!editE ? (
        <>
          <span>{cellValueEngineAmperage}</span>
          <button
            onClick={() => seteditE(true)}
            disabled={blocked ? true : false}
          >
            edit
          </button>
        </>
      ) : (
        <>
          <S.ElementInput
            value={cellValueEngineAmperage}
            onChange={(event) => inputEngineHandler(event)}
            type="number"
          />
          <button
            onClick={() => seteditE(false)}
            disabled={blocked ? true : false}
          >
            ok
          </button>
        </>
      )}
    </S.TableBodyElement>
  )
}

export default TableCell
