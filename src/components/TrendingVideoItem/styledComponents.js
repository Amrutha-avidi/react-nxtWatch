import styled from 'styled-components'

export const TrendingVideoItemCon = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 20px;
  width: 900px;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100vw;
    margin: 0px;
  }
`
export const TrendingImg = styled.img`
  width: 440px;
  height: 220px;
  @media screen and (max-width: 768px) {
    width: 100vw;
    height: 220px;
  }
`
export const MobileContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
`

export const ChannelLogo = styled.img`
  width: 40px;
  height: 40px;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TitleAndName = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`

export const ContentHead = styled.p`
  font-size: 25px;
  margin-top: 0px;
  padding-top: 0px;
  font-weight: 500;
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 0px;
    padding-bottom: 0px;
  }
`
export const DotSpl = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ChannelName = styled.p`
  font-size: 15px;
  margin: 0px;
  padding: 0px;
  color: #475569;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`
export const NameAndDate = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0px;
  padding-top: 0px;
  color: #475569;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
`
export const CountAndDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  @media screen and (max-width: 768px) {
    justify-content: center;
    align-items: center;
  }
`
export const Count = styled.p`
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`
export const PublishedDate = styled.p`
  font-size: 15px;
  @media screen and (max-width: 768px) {
    font-size: 13px;
  }
`
