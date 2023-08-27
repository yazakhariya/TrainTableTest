import * as S from './UiButton.style'

type Props = {
  onClick?: () => void
  children: React.ReactNode
  disabled?: boolean
}

const UiButton = ({ onClick, children, disabled }: Props) => {
  return (
    <S.Button disabled={disabled} onClick={onClick}>
      {children}
    </S.Button>
  )
}

export default UiButton
