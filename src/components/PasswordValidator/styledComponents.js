// Style your elements here
import styled from 'styled-components'

export const PageContainer = styled.div`
 height:100vh;
 background-color:#24263c;
 padding:10px;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
`
export const Title = styled.h1`
  color:#fff;
  font-family:'Roboto';
  font-size:30px;
  text-align:center;
`

export const ValidatePasswordContainer = styled.div`
  height:400px;
  width:500px;
  background-color:#383a4e;
  padding:10px;
  display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 border-radius:20px;
  
`

export const Description = styled.p`
  font-family:'Roboto';
  color: #f8fafc;
`
export const InputText = styled.input`
  height:40px;
  width:250px;
  outline:none;
`
export const ErrorText = styled.p`
  font-family:'Roboto';
  color:#ef4444;
`
