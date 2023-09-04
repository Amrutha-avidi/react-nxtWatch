import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'
import ThemeChange from '../../context/ThemeChange'

import {
  VideoItemCon,
  VideoThumbnail,
  LogoAndTitle,
  LogoImage,
  Title,
  ChannelName,
  CountAndDate,
  Count,
  PublishedDate,
} from './styledComponents'

const VideoItem = props => {
  const {videoItem} = props

  const {thumbnailUrl, id, channel, publishedAt, title, viewCount} = videoItem

  const date = formatDistanceToNow(new Date(publishedAt))
  const dateList = date.split(' ')
  dateList.shift()
  dateList.push('ago')
  const formattedDate = dateList.join(' ')

  return (
    <ThemeChange.Consumer>
      {value => {
        const {darkTheme} = value
        const theme = darkTheme ? 'dark' : 'light'
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <VideoItemCon>
              <VideoThumbnail src={thumbnailUrl} alt="video thumbnail" />
              <LogoAndTitle>
                <LogoImage src={channel.profileImageUrl} alt="channel logo" />
                <div>
                  <Title theme={theme}>{title}</Title>
                  <ChannelName>{channel.name}</ChannelName>
                  <CountAndDate>
                    <Count>{viewCount} views</Count>
                    <BsDot size={25} />
                    <PublishedDate>{formattedDate}</PublishedDate>
                  </CountAndDate>
                </div>
              </LogoAndTitle>
            </VideoItemCon>
          </Link>
        )
      }}
    </ThemeChange.Consumer>
  )
}

export default VideoItem
