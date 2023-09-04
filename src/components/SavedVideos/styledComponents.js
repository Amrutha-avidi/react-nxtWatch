import styled from 'styled-components'

export const SavedVideosCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const HeadCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 85vw;
  height: 150px;
  padding: 30px;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f8fafc'};
  @media screen and (max-width: 768px) {
    padding: 10px;
    width: 100vw;
    padding-left: 20px;
  }
`
export const IconCon = styled.div`
  padding: 20px;
  border-radius: 60px;
  margin-right: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#e1e9f0'};
  @media screen and (max-width: 768px) {
    padding: 10px;
    border-radius: 50px;
  }
`
export const ContentHead = styled.h1`
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`
export const HeadAndList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`
export const SavedVideoList = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f ' : '#f9f9f9 '};
`
export const SavedVideoListCon = styled.ul`
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`

export const NoSavedCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85vw;
  padding: 20px;
`
export const NoSavedImage = styled.img`
  width: 550px;
  height: 350px;
`

export const NoSavedHead = styled.h1`
  font-size: 30px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`

export const NoSavedPara = styled.p`
  font-size: 20px;
  color: #383838;
`
