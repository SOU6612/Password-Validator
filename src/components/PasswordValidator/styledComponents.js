// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #24263c;
  min-height: 100vh;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #383a4e;
  height: 40vh;
  width: 50vh;
  border-radius: 10px;
`

export const Heading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 20px;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #f8fafc;
  margin-bottom: 40px;
`

export const Input = styled.input`
  background-color: #edeeff;
  border: none;
  outline: none;
  color: #475569;
  width: 80%;
  height: 34px;
  margin-top: 10px;
  margin-bottom: 0px;
`

export const ErrorMsg = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ef4444;
  margin-bottom: 10px;
`
