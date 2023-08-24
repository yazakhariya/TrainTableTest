import * as React from 'react'
import { QueryFn, ElementType } from 'src/api/types'
import * as S from './TrainTable.style'
import TrainCharact from './components/TrainCharacteristics'

type Props = {
  data: QueryFn
}

const TrainTable = ({ data }: Props) => {
  const [openModal, setOpenModal] = React.useState<boolean | null>(null)
  const [trainName, setTrainName] = React.useState<string>('')

  return (
    <S.Layout>
      {openModal ? (
        <TrainCharact closeModalFn={() => setOpenModal(null)} data={data} name={trainName} />
      ) : (
        <S.TableBox>
          <S.MainTitle>Поезда</S.MainTitle>
          <S.TableWrapper>
            <S.TableHead>
              <tr>
                <S.TableHeader>Название</S.TableHeader>
                <S.TableHeader>Описание</S.TableHeader>
              </tr>
            </S.TableHead>
            <S.TableBody>
              {data
                ? data.map((el: ElementType, i: number) => {
                    return (
                      <tr
                        onClick={() => {
                          setTrainName(el.name)
                          setOpenModal(true)
                        }}
                        key={i}
                      >
                        <S.TableBodyName>{el.name}</S.TableBodyName>
                        <S.TableBodyDesc>{el.description}</S.TableBodyDesc>
                      </tr>
                    )
                  })
                : null}
            </S.TableBody>
          </S.TableWrapper>
        </S.TableBox>
      )}
    </S.Layout>
  )
}

export default TrainTable
