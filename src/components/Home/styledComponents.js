import styled from 'styled-components'

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`
export const HomeCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`

export const VideoListCon = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-left: 0px;
  padding-left: 0px;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`
export const SearchAndList = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 85vw;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f9f9f9'};
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`
export const SearchCon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0px;
  padding-left: 0px;
  margin: 20px;
`
export const InputBar = styled.input`
  background-color: transparent;
  border-width: thin;
  width: 450px;
  height: 35px;
  border-color: #616e7c;
  border-style: solid;
  padding: 10px;
  @media screen and (max-width: 768px) {
    width: 250px;
  }
`
export const SearchButton = styled.button`
  height: 35px;
  width: 70px;
  border-width: thin;
  border-color: #616e7c;
  border-style: solid;
  background-color: ${props =>
    props.theme === 'dark' ? '#181818' : '#f1f5f9'};
`
export const NoVideoCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85vw;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f ' : '#f9f9f9 '};
  @media screen and (max-width: 768px) {
    width: 100vw;
    padding: 20px;
  }
`
export const NoVideoImage = styled.img`
  width: 350px;
  height: 300px;
  @media screen and (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`
export const NoVideoHead = styled.h1`
  font-size: 28px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  @media screen and (max-width: 768px) {
    font-size: 23px;
    text-align: center;

    padding: 10px;
  }
`
export const NoVideoPara = styled.p`
  font-size: 20px;
  color: #475569;
  margin-top: 0px;
  padding-top: 0px;
  @media screen and (max-width: 768px) {
    font-size: 16px;
    text-align: center;
    padding: 10px;
  }
`
export const RetryVideosButton = styled.button`
  border-width: 0px;
  border-radius: 8px;
  background-color: #4f46e5;
  color: #ffffff;
  width: 110px;
  height: 40px;
`
export const PopUpCon = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  width: 85vw;
  height: 300px;
  padding: 30px;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  padding-right: 10px;
`
export const GetButton = styled.button`
  background-color: transparent;
  border-width: thin;
  border-style: solid;
  height: 40px;
  width: 120px;
  font-weight: bold;
`
export const PopUpContext = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`
export const PopUpLogo = styled.img`
  width: 160px;
  height: 40px;
`
export const PopUpContextHead = styled.p`
  font-size: 22px;
  font-weight: 400;
  color: #000000;
`
export const LoaderCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 85vw;
`
