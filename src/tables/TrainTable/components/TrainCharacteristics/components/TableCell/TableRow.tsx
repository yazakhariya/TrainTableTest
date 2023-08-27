import * as React from 'react'
import * as S from './TableRow.style'
import SpeedCell from './components/Speed'
import ForceCell from './components/Force'
import EngineCell from './components/Engine'

type Props = {
  speed?: number
  force?: number
  engine?: number
  index: number
  block: React.Dispatch<React.SetStateAction<boolean>>
  set: React.Dispatch<React.SetStateAction<unknown[]>>
  blocked: boolean
}

const TableRow = ({
  speed,
  force,
  engine,
  index,
  block,
  set,
  blocked,
}: Props) => {
  return (
    <S.TableBodyElement>
      <SpeedCell
        speed={speed}
        set={set}
        block={block}
        blocked={blocked}
        index={index}
      />
      <ForceCell force={force} block={block} blocked={blocked} index={index} />
      <EngineCell
        engine={engine}
        block={block}
        blocked={blocked}
        index={index}
      />
    </S.TableBodyElement>
  )
}

export default TableRow
