import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  Paragraph,
  Input,
  ErrorMsg,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const showMsg = password.length < 8
  const onCheckPassword = event => {
    setPassword(event.target.value)
  }

  return (
    <AppContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <Input type="password" value={password} onChange={onCheckPassword} />
        {showMsg && (
          <ErrorMsg>Your password must be at least 8 characters</ErrorMsg>
        )}
      </CardContainer>
    </AppContainer>
  )
}

export default PasswordValidator
