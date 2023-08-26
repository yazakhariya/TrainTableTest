import * as React from 'react'
import { ElementCharacteristics, ElementType, QueryFn } from 'src/api/types'
import * as S from './TrainCharacteristics.style'
import cross from 'src/assets/cross-square-svgrepo-com.svg'
import TableCell from './components/TableCell'

type Props = {
  data: QueryFn
  name: string
  closeModalFn: () => void
}

const TrainCharact = ({ data, name, closeModalFn }: Props) => {
  const [trainInfo, setTrainInfo] = React.useState(Array(0))

  const [buttonBlock, setButtonBlock] = React.useState<boolean>(false)

  const [speed, setspeed] = React.useState(Array(0))

  const handleClick = () => {
    const sorted = Object.values(speed).sort(function (a, b) {
      return a - b
    })
    console.log(sorted)
  }

  React.useEffect(() => {
    setTrainInfo(
      Array(data.filter((item: { name: string }) => item.name === name))
    )
  }, [data, name])

  return (
    <S.TableBox>
      <S.TableTop>
        <S.Title>Характеристики</S.Title>
        <S.ImageWrapper onClick={closeModalFn}>
          <img src={cross} width="20px" height="20px" />
        </S.ImageWrapper>
      </S.TableTop>
      <S.SubTitle>{name}</S.SubTitle>
      <S.TableWrapper id="table">
        <S.TableHead>
          <tr>
            <S.TableHeader>Ток двигателя</S.TableHeader>
            <S.TableHeader>Сила тяги</S.TableHeader>
            <S.TableHeader>Скорость</S.TableHeader>
          </tr>
        </S.TableHead>
        <S.TableBody>
          {trainInfo?.length !== 0
            ? trainInfo[0].map((el: { characteristics: ElementType }) =>
                el.characteristics.map(
                  (el: ElementCharacteristics, i: number) => {
                    return (
                      <tr key={i}>
                        <TableCell
                          speed={el.speed}
                          force={el.force}
                          engine={el.engineAmperage}
                          index={i}
                          block={setButtonBlock}
                          set={setspeed}
                          blocked={buttonBlock}
                        />
                      </tr>
                    )
                  }
                )
              )
            : null}
        </S.TableBody>
      </S.TableWrapper>
      <S.ButtonBox>
        <S.Button onClick={handleClick} disabled={buttonBlock}>
          Отправить данные
        </S.Button>
      </S.ButtonBox>
    </S.TableBox>
  )
}

export default TrainCharact
