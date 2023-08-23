
import UiTableBody from '../components/UiTableBody'
import * as S from './TrainTable.style'

const TrainTable = () => {
  return (
    <S.Layout>
      <S.TableBox>
        <S.MainTitle>Поезда</S.MainTitle>
        <S.TableWrapper>
          <S.TableHead>
            <tr>
              <S.TableHeader>Название</S.TableHeader>
            </tr>
          </S.TableHead>
          <S.TableHead>
            <tr>
              <S.TableHeader>Описание</S.TableHeader>
            </tr>
          </S.TableHead>
          <UiTableBody children={undefined} />
        </S.TableWrapper>
      </S.TableBox>
    </S.Layout>
  )
}

export default TrainTable
