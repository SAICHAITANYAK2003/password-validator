// Write your code here
import {useState} from 'react'

import {
  PageContainer,
  Title,
  ValidatePasswordContainer,
  Description,
  InputText,
  ErrorText,
} from './styledComponents'

const PasswordValidator = () => {
  const [inputText, setInputText] = useState('')
  const showErrorMsg = inputText.length < 8

  const onChangeInput = event => {
    setInputText(event.target.value)
  }

  return (
    <PageContainer>
      <ValidatePasswordContainer>
        <Title>Password Validator</Title>
        <Description>Check how strong and secure is your password</Description>
        <InputText
          type="password"
          placeholder="Check your password"
          onChange={onChangeInput}
          value={inputText}
        />
        {showErrorMsg && (
          <ErrorText>Your password must be at least 8 characters</ErrorText>
        )}
      </ValidatePasswordContainer>
    </PageContainer>
  )
}

export default PasswordValidator
