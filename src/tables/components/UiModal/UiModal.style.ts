import { styled } from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;

  width: 100vw;
  height: 100vh;

  background: rgba(138, 159, 117, 0.7);

  display: flex;
  align-items: center;
  justify-content: center;
`

export const ModalContent = styled.div`
  position: relative;
`

export const ImageWrapper = styled.div`
  position: absolute;
  z-index: 999;
  top: 0;
  right: 0;
  padding: 10px;
  cursor: pointer;
`