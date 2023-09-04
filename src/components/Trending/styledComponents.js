import styled from 'styled-components'

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
export const LoaderCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 85vw;
`
export const TrendingMain = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
`
export const TrendingBody = styled.div`
  display: flex;
  flex-direction: row;
`
export const HeadCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 85vw;
  padding: 30px;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f8fafc'};
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
  font-size: 25px;
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

export const TrendingListCon = styled.ul`
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 0px;
  }
`
