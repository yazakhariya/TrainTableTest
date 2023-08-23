import * as S from './UiTableBody.style'

type Props = {
  children: React.ReactNode
}

const UiTableBody = ({ children }: Props) => {
  return (
    <S.TableBody>
      <tr>
        <S.TableBodyElement>{children}</S.TableBodyElement>
      </tr>
    </S.TableBody>
  )
}

export default UiTableBody
