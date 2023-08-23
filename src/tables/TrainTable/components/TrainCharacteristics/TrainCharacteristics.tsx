import * as React from 'react'
import { ElementCharacteristics, ElementType, QueryFn } from 'src/api/types'
import * as S from './TrainCharacteristics.style'

type Props = {
  data: QueryFn
  name: string
}

const TrainCharact = ({ data, name }: Props) => {
  const [trainInfo, setTrainInfo] = React.useState(Array(0))

  React.useEffect(() => {
    setTrainInfo(
      Array(data.filter((item: { name: string }) => item.name === name))
    )
  }, [data, name])

  return (
    <S.Layout>
      <S.TableBox>
        <S.MainTitle>{name}</S.MainTitle>
        <S.TableWrapper>
          <S.TableHead>
            <tr>
              <S.TableHeader>Ток двигателя</S.TableHeader>
              <S.TableHeader>Сила тяги</S.TableHeader>
              <S.TableHeader>Скорость</S.TableHeader>
            </tr>
          </S.TableHead>
          <S.TableBody>
            {trainInfo?.length !== 0
              ? trainInfo[0].map(
                  (el: { characteristics: ElementType }) =>
                    el.characteristics.map((el: ElementCharacteristics, i: number) => {
                      return (
                        <tr key={i}>
                          <S.TableBodyElement>{el.speed}</S.TableBodyElement>
                          <S.TableBodyElement>{el.force}</S.TableBodyElement>
                          <S.TableBodyElement>
                            {el.engineAmperage}
                          </S.TableBodyElement>
                        </tr>
                      )
                    })
                )
              : null}
          </S.TableBody>
        </S.TableWrapper>
        <button>Отправить данные</button>
      </S.TableBox>
    </S.Layout>
  )
}

export default TrainCharact
