import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {MdPlaylistAdd} from 'react-icons/md'

import {BiDislike, BiLike} from 'react-icons/bi'
import {BsDot} from 'react-icons/bs'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ThemeChange from '../../context/ThemeChange'
import SavedVideoContext from '../../context/SavedVideoContext'

import Header from '../Header'

import SideMenu from '../SideMenu'

import {
  NoVideoCon,
  NoVideoImage,
  NoVideoHead,
  NoVideoPara,
  RetryVideosButton,
  LoaderCon,
  VideoCardBody,
  VideoCardCon,
  PlayerCon,
  PlayerConMobile,
  Content,
  Title,
  IconsCon,
  IconButton,
  CountAndIcons,
  CountAndDate,
  ChannelCon,
  ChannelLogo,
  ChannelContent,
  ChannelName,
  Subscribers,
  Description,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class VideoItemCard extends Component {
  state = {
    videoCardDetails: [],
    apiStatus: apiStatusConstant.initial,
    like: false,
    dislike: false,
  }

  componentDidMount() {
    this.getVideoCardDetails()
  }

  getVideoCardDetails = async () => {
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const formattedData = {videoCardDetails: data.video_details}
      const {videoCardDetails} = formattedData
      const dataRequired = {
        channel: {
          name: videoCardDetails.channel.name,
          profileImageUrl: videoCardDetails.channel.profile_image_url,
          subscriberCount: videoCardDetails.channel.subscriber_count,
        },
        description: videoCardDetails.description,
        id: videoCardDetails.id,
        publishedAt: videoCardDetails.published_at,
        thumbnailUrl: videoCardDetails.thumbnail_url,
        title: videoCardDetails.title,
        videoUrl: videoCardDetails.video_url,
        viewCount: videoCardDetails.view_count,
      }

      this.setState({
        apiStatus: apiStatusConstant.success,
        videoCardDetails: dataRequired,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  changeLikeState = () => {
    this.setState(prevState => ({like: !prevState.like, dislike: false}))
  }

  changeDisLikeState = () => {
    this.setState(prevState => ({dislike: !prevState.dislike, like: false}))
  }

  getVideoCardDetailsView = () => {
    const {videoCardDetails, like, dislike} = this.state
    const {
      publishedAt,
      title,
      videoUrl,
      viewCount,
      channel,
      description,
      id,
    } = videoCardDetails

    const {name, profileImageUrl, subscriberCount} = channel
    console.log(videoUrl)

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
          const isLikeActive = like ? 'active' : 'normal'
          const isDislikeActive = dislike ? 'active' : 'normal'

          return (
            <VideoCardCon theme={theme}>
              <PlayerCon>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="75vw"
                  height="600px"
                />
              </PlayerCon>
              <PlayerConMobile>
                <ReactPlayer
                  url={videoUrl}
                  controls
                  width="100vw"
                  height="200px"
                />
              </PlayerConMobile>

              <Content>
                <Title theme={theme}>{title}</Title>
                <CountAndIcons>
                  <CountAndDate>
                    <p>{viewCount} views</p>
                    <BsDot size={25} />
                    <p>{formattedDate}</p>
                  </CountAndDate>
                  <IconsCon>
                    <IconButton
                      type="button"
                      theme={isLikeActive}
                      onClick={this.changeLikeState}
                    >
                      <BiLike size={25} />
                      Like
                    </IconButton>
                    <IconButton
                      type="button"
                      theme={isDislikeActive}
                      onClick={this.changeDisLikeState}
                    >
                      <BiDislike size={25} />
                      Dislike
                    </IconButton>
                    <SavedVideoContext.Consumer>
                      {val => {
                        const {updateSave, savedVideosList} = val
                        const isPresent = savedVideosList.find(
                          each => each.id === id,
                        )

                        const isSaveActive =
                          isPresent !== undefined ? 'active' : 'normal'

                        const saveButtonText =
                          isPresent !== undefined ? 'Saved' : 'Save'

                        return (
                          <IconButton
                            type="button"
                            theme={isSaveActive}
                            onClick={() => updateSave(videoCardDetails)}
                          >
                            <MdPlaylistAdd size={25} />
                            {saveButtonText}
                          </IconButton>
                        )
                      }}
                    </SavedVideoContext.Consumer>
                  </IconsCon>
                </CountAndIcons>
                <hr />
                <ChannelCon>
                  <ChannelLogo src={profileImageUrl} alt="channel logo" />
                  <ChannelContent>
                    <ChannelName theme={theme}>{name}</ChannelName>
                    <Subscribers>{subscriberCount} subscribers</Subscribers>
                    <Description theme={theme}>{description}</Description>
                  </ChannelContent>
                </ChannelCon>
              </Content>
            </VideoCardCon>
          )
        }}
      </ThemeChange.Consumer>
    )
  }

  getVideoItemDetailsFailureView = () => (
    <ThemeChange.Consumer>
      {value => {
        const {darkTheme} = value
        const theme = darkTheme ? 'dark' : 'light'
        const imgUrl = darkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <NoVideoCon theme={theme}>
            <NoVideoImage src={imgUrl} alt="failure view" />
            <NoVideoHead theme={theme}>Oops! Something Went Wrong</NoVideoHead>
            <NoVideoPara>
              We are having some trouble to complete your request. <br />
              Please try again
            </NoVideoPara>
            <RetryVideosButton type="button" onClick={this.getVideoCardDetails}>
              Retry
            </RetryVideosButton>
          </NoVideoCon>
        )
      }}
    </ThemeChange.Consumer>
  )

  getLoadingView = () => (
    <ThemeChange.Consumer>
      {value => {
        const {darkTheme} = value
        return (
          <LoaderCon data-testid="loader">
            <Loader
              type="ThreeDots"
              color={darkTheme ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderCon>
        )
      }}
    </ThemeChange.Consumer>
  )

  renderApiStatusViewForVideoCardDetails = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.getVideoCardDetailsView()
      case apiStatusConstant.failure:
        return this.getVideoItemDetailsFailureView()
      case apiStatusConstant.inProgress:
        return this.getLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div data-testid="videoItemDetails">
        <Header />
        <VideoCardBody>
          <SideMenu />
          {this.renderApiStatusViewForVideoCardDetails()}
        </VideoCardBody>
      </div>
    )
  }
}

export default VideoItemCard
