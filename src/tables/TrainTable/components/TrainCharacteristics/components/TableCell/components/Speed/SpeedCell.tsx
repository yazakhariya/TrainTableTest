import * as React from 'react'
import UiButton from 'src/components/UiButton'
import edit from 'src/assets/edit.svg'
import done from 'src/assets/done.svg'
import UiInput from 'src/components/UiInput'
import UiSpan from 'src/components/UiSpan'

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
          <UiSpan>{cellValueSpeed.current}</UiSpan>
          <UiButton
            onClick={() => seteditS(true)}
            disabled={blocked ? true : false}
          >
            <img src={edit} width="20px" height="20px" />
          </UiButton>
        </>
      ) : (
        <>
          <UiInput
            onChange={inputSpeedHandler}
            type="number"
            name={`${index}`}
          />
          <UiButton
            onClick={() => seteditS(false)}
            disabled={blocked ? true : false}
          >
            <img src={done} width="20px" height="20px" />
          </UiButton>
        </>
      )}
    </>
  )
}

export default SpeedCell
