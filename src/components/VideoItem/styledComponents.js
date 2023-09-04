import styled from 'styled-components'

export const VideoItemCon = styled.li`
  list-style: none;
  width: 300px;
  margin: 10px;
  @media screen and (max-width: 768px) {
    width: 320px;
  }
`
export const VideoThumbnail = styled.img`
  width: 300px;
  height: 170px;
`
export const LogoAndTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
`

export const LogoImage = styled.img`
  width: 50px;
  height: 50px;
  margin-top: 15px;
`

export const Title = styled.p`
  font-size: 15px;
  color: ${props => (props.theme === 'dark' ? ' #f1f5f9' : '#000000')};
  margin-left: 5px;
`
export const ChannelName = styled.p`
  font-size: 15px;
  margin: 0px;
  padding: 0px;
  color: #475569;
`
export const CountAndDate = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 0px;
  padding-top: 0px;
  color: #475569;
`
export const Count = styled.p`
  font-size: 15px;
`
export const PublishedDate = styled.p`
  font-size: 15px;
`
