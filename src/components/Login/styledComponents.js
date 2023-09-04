import styled from 'styled-components'

export const LoginCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};
  height: 100vh;
`
export const Card = styled.form`
  background-color: ${props =>
    props.theme === 'dark' ? '#000000' : '#ffffff'};
  padding: 50px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin: 20px;
    padding: 30px;
  }
`

export const WebsiteLogo = styled.img`
  width: 200px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 170px;
  }
`

export const CheckboxCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`
export const InputLabel = styled.label`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#445b7a')};
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 5px;
`
export const InputBar = styled.input`
  width: 300px;
  height: 30px;
  border-width: thin;
  border-style: solid;
  border-color: ${props => (props.theme === 'dark' ? '#445b7a' : '#7e858e')};
  border-radius: 7px;
  padding: 10px;
  margin-bottom: 15px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#7e858e')};
  background-color: transparent;

  @media screen and (max-width: 768px) {
    width: 270px;
    height: 33px;
  }
`

export const LoginButton = styled.button`
  color: #ffffff;
  border-width: 0px;
  border-radius: 7px;
  width: 300px;
  height: 30px;
  background-color: #3b82f6;
  margin-top: 20px;

  @media screen and (max-width: 768px) {
    width: 270px;
    height: 33px;
  }
`

export const CheckBoxLabel = styled.label`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : ' #000000')};
`

export const ErrorMsg = styled.p`
  color: red;
`
