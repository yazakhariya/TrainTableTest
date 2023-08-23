import * as S from './UiModal.style'
import cross from 'src/assets/cross-square-svgrepo-com.svg'

type Props = {
  children: React.ReactNode
  closeModalFn?: () => void
}

const UiModal = ({ children, closeModalFn }: Props) => {
  return (
    <S.Modal>
      <S.ModalContent>
      <S.ImageWrapper onClick={closeModalFn}>
          <img src={cross} width="20px" height="20px" />
        </S.ImageWrapper>
        {children}
      </S.ModalContent>
    </S.Modal>
  )
}

export default UiModal