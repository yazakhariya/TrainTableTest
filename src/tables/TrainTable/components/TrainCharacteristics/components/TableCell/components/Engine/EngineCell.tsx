import * as React from 'react'
import edit from 'src/assets/edit.svg'
import done from 'src/assets/done.svg'
import UiButton from 'src/components/UiButton'
import UiInput from 'src/components/UiInput'
import UiSpan from 'src/components/UiSpan'

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
          <UiSpan>{cellValueEngineAmperage.current}</UiSpan>
          <UiButton
            onClick={() => seteditE(true)}
            disabled={blocked ? true : false}
          >
            <img src={edit} width="20px" height="20px" />
          </UiButton>
        </>
      ) : (
        <>
          <UiInput
            onChange={inputEngineHandler}
            type="number"
            name={`${index}`}
          />
          <UiButton
            onClick={() => seteditE(false)}
            disabled={blocked ? true : false}
          >
            <img src={done} width="20px" height="20px" />
          </UiButton>
        </>
      )}
    </>
  )
}

export default EngineCell
