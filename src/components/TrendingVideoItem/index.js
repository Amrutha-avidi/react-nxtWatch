import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

import ThemeChange from '../../context/ThemeChange'

import {
  TrendingVideoItemCon,
  TrendingImg,
  ContentHead,
  PublishedDate,
  ChannelName,
  NameAndDate,
  CountAndDate,
  Count,
  DotSpl,
  MobileContent,
  ChannelLogo,
  TitleAndName,
} from './styledComponents'

const TrendingVideoItem = props => {
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
            <TrendingVideoItemCon>
              <TrendingImg src={thumbnailUrl} alt="video thumbnail" />

              <MobileContent>
                <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
                <TitleAndName>
                  <ContentHead theme={theme}>{title}</ContentHead>
                  <NameAndDate>
                    <CountAndDate>
                      <ChannelName>{channel.name}</ChannelName>
                      <DotSpl>
                        <BsDot size={25} />
                      </DotSpl>
                    </CountAndDate>
                    <CountAndDate>
                      <Count>{viewCount} views</Count>
                      <BsDot size={25} />
                      <PublishedDate>{formattedDate}</PublishedDate>
                    </CountAndDate>
                  </NameAndDate>
                </TitleAndName>
              </MobileContent>
            </TrendingVideoItemCon>
          </Link>
        )
      }}
    </ThemeChange.Consumer>
  )
}
export default TrendingVideoItem
