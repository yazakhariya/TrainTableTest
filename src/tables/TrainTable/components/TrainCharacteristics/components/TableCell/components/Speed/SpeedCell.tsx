import * as React from 'react'
import * as S from './SpeedCell.style'

type Props = {
    set: React.Dispatch<React.SetStateAction<unknown[]>>
    speed?: number
    index: number
    block: React.Dispatch<React.SetStateAction<boolean>>
    blocked: boolean
}

const SpeedCell = ({ set, speed, index, block, blocked }: Props) => {
  const cellValueSpeed = React.useRef(speed)
  const [editS, seteditS] = React.useState<boolean>(false)

  const inputSpeedHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    cellValueSpeed.current = Number(value.slice(0, 9))
    
    if (!Number.isInteger(cellValueSpeed.current)) {
      event.target.style.backgroundColor = 'red'
      block(true)
    } else {
      event.target.style.backgroundColor = 'white'
      block(false)
    }

    set((prevState) => ({
      ...prevState,
      [name]: parseInt(value),
    }))
  }
  
  return (
    <>
      {!editS ? (
        <>
          <span>{cellValueSpeed.current}</span>
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
            onChange={inputSpeedHandler}
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
    </>
  )
}

export default SpeedCell
