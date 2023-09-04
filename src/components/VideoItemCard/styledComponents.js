import styled from 'styled-components'

export const NoVideoCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85vw;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f ' : '#f9f9f9 '};
`
export const NoVideoImage = styled.img`
  width: 350px;
  height: 300px;
`

export const NoVideoHead = styled.h1`
  font-size: 28px;
  margin-bottom: 0px;
  color: ${props => (props.theme === 'dark' ? '#ffffff ' : '#000000 ')};
`
export const NoVideoPara = styled.p`
  font-size: 20px;
  color: #475569;
  margin-top: 0px;
  padding-top: 0px;
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
export const VideoCardBody = styled.div`
  display: flex;
  flex-direction: row;
`

export const VideoCardCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  background-color: ${props =>
    props.theme === 'dark' ? '#0f0f0f' : '#f9f9f9'};
  @media screen and (max-width: 786px) {
    width: 100vw;
    padding-top: 20px;
  }
`
export const PlayerCon = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  @media screen and (max-width: 786px) {
    display: none;
  }
`
export const PlayerConMobile = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 786px) {
    display: none;
  }
`
export const Content = styled.div`
  padding: 30px;
  @media screen and (max-width: 786px) {
    padding: 20px;
  }
`
export const Title = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  @media screen and (max-width: 786px) {
    font-size: 17px;
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
`
export const CountAndIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #475569;
  margin-top: 0px;
  padding-top: 0px;
  @media screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
  }
`
export const CountAndDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media screen and (max-width: 786px) {
    height: 45px;
  }
`
export const IconsCon = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 786px) {
    height: 55px;
  }
`
export const IconButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 10px;
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.theme === 'active' ? '#2563eb' : '#64748b')};
`
export const ChannelCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
`
export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 15px;
`
export const ChannelContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`
export const ChannelName = styled.p`
  font-size: 18px;
  margin-bottom: 0px;
  padding-bottom: 0px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
`
export const Subscribers = styled.p`
  font-size: 15px;
  color: #475569;
`
export const Description = styled.p`
  font-size: 16px;
  color: ${props => (props.theme === 'dark' ? '#f9f9f9' : '#0f0f0f')};
  @media screen and (max-width: 786px) {
    display: flex;
    flex-direction: row;
    justify-self: center;
  }
`
