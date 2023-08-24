import * as React from 'react'
import { ElementCharacteristics, ElementType, QueryFn } from 'src/api/types'
import * as S from './TrainCharacteristics.style'
import cross from 'src/assets/cross-square-svgrepo-com.svg'

type Props = {
  data: QueryFn
  name: string
  closeModalFn: () => void
}

const TrainCharact = ({ data, name, closeModalFn }: Props) => {
  const [trainInfo, setTrainInfo] = React.useState(Array(0))

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
            ? trainInfo[0].map((el: { characteristics: ElementType }) =>
                el.characteristics.map(
                  (el: ElementCharacteristics, i: number) => {
                    return (
                      <tr key={i}>
                        <S.TableBodyElement>{el.speed}</S.TableBodyElement>
                        <S.TableBodyElement>{el.force}</S.TableBodyElement>
                        <S.TableBodyElement>
                          {el.engineAmperage}
                        </S.TableBodyElement>
                      </tr>
                    )
                  }
                )
              )
            : null}
        </S.TableBody>
      </S.TableWrapper>
      <button>Отправить данные</button>
    </S.TableBox>
  )
}

export default TrainCharact
