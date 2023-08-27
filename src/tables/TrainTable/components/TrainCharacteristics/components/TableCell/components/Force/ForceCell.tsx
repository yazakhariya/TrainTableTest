import * as React from 'react'
import * as S from './ForceCell.style'

type Props = {
  force?: number
  block: React.Dispatch<React.SetStateAction<boolean>>
  blocked: boolean
  index: number
}

const ForceCell = ({ force, block, blocked, index }: Props) => {
  const cellValueForce = React.useRef(force)
  const [editF, seteditF] = React.useState<boolean>(false)

  const inputForceHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    cellValueForce.current = Number(value.slice(0, 9))
    console.log(cellValueForce.current)
    if (Number.isInteger(cellValueForce.current)) {
      event.target.style.backgroundColor = 'red'
      block(true)
    } else {
      event.target.style.backgroundColor = 'white'
      block(false)
    }
  }

  return (
    <>
      {!editF ? (
        <>
          <span>{cellValueForce.current}</span>
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
            onChange={inputForceHandler}
            type="number"
            name={`${index}`}
            value={cellValueForce.current}
          />
          <button
            onClick={() => seteditF(false)}
            disabled={blocked ? true : false}
          >
            ok
          </button>
        </>
      )}
    </>
  )
}

export default ForceCell
