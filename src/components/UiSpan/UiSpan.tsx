import * as S from './UiSpan.style'

type Props = {
    children: React.ReactNode
}

const UiSpan = ({children}: Props) => {
  return (
    <S.Span>{children}</S.Span>
  )
}

export default UiSpan