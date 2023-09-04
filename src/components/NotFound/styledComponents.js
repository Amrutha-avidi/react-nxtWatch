import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`

export const NotFoundCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 85vw;
  background-size: cover;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`
export const NotFoundImg = styled.img`
  width: 500px;
  height: 400px;
`

export const NotFoundHead = styled.h1`
  font-size: 35px;
  color: ${props => (props.theme === 'dark' ? ' #ebebeb' : '#313131')};
`
export const NotFoundPara = styled.p`
  font-size: 20px;
  color: #606060;
`
