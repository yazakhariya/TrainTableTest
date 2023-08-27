import * as S from './UiInput.style'

type Props = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type: string
  name: string
}

const UiInput = ({onChange, type, name}: Props) => {
    return <S.Input name={name} onChange={onChange} type={type} />
}

export default UiInput
