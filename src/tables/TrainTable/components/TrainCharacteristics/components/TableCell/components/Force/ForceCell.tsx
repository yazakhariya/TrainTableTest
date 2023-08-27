import * as React from 'react'
import edit from 'src/assets/edit.svg'
import done from 'src/assets/done.svg'
import UiButton from 'src/components/UiButton'
import UiInput from 'src/components/UiInput'
import UiSpan from 'src/components/UiSpan'

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
          <UiSpan>{cellValueForce.current}</UiSpan>
          <UiButton
            onClick={() => seteditF(true)}
            disabled={blocked ? true : false}
          >
            <img src={edit} width="20px" height="20px" />
          </UiButton>
        </>
      ) : (
        <>
          <UiInput
            onChange={inputForceHandler}
            type="number"
            name={`${index}`}
          />
          <UiButton
            onClick={() => seteditF(false)}
            disabled={blocked ? true : false}
          >
            <img src={done} width="20px" height="20px" />
          </UiButton>
        </>
      )}
    </>
  )
}

export default ForceCell
