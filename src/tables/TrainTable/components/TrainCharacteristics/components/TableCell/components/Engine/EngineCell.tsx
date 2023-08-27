import * as React from 'react'
import * as S from './EngineCell.style'

type Props = {
  engine?: number
  block: React.Dispatch<React.SetStateAction<boolean>>
  blocked: boolean
  index: number
}

const EngineCell = ({ engine, block, blocked, index }: Props) => {
  const cellValueEngineAmperage = React.useRef(engine)
  const [editE, seteditE] = React.useState<boolean>(false)

  const inputEngineHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    cellValueEngineAmperage.current = Number(value.slice(0, 9))
    console.log(cellValueEngineAmperage.current)
    if (!Number.isInteger(cellValueEngineAmperage.current)) {
      event.target.style.backgroundColor = 'red'
      block(true)
    } else {
      event.target.style.backgroundColor = 'white'
      block(false)
    }
  }

  return (
    <>
      {!editE ? (
        <>
          <span>{cellValueEngineAmperage.current}</span>
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
            onChange={inputEngineHandler}
            type="number"
            name={`${index}`}
            value={cellValueEngineAmperage.current}
          />
          <button
            onClick={() => seteditE(false)}
            disabled={blocked ? true : false}
          >
            ok
          </button>
        </>
      )}
    </>
  )
}

export default EngineCell
