import {Component} from 'react'
import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdClose} from 'react-icons/io'

import ThemeChange from '../../context/ThemeChange'

import Header from '../Header'
import SideMenu from '../SideMenu'

import VideoItem from '../VideoItem'

import {
  Main,
  HomeCon,
  SearchAndList,
  VideoListCon,
  SearchCon,
  InputBar,
  SearchButton,
  NoVideoCon,
  NoVideoImage,
  NoVideoHead,
  NoVideoPara,
  RetryVideosButton,
  PopUpCon,
  CloseButton,
  GetButton,
  PopUpContext,
  PopUpLogo,
  PopUpContextHead,
  LoaderCon,
} from './styledComponents'

const apiStatusConstant = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Home extends Component {
  state = {
    apiStatus: apiStatusConstant.initial,
    videosList: [],
    search: '',
    popUp: true,
  }

  componentDidMount() {
    this.getVideos()
  }

  onChangeSearchInput = event => {
    this.setState({search: event.target.value})
  }

  onEnterSearch = event => {
    if (event.key === 'Enter') {
      this.getVideos()
    }
  }

  onClickSearchButton = () => {
    this.getVideos()
  }

  getVideos = async () => {
    const {search} = this.state
    this.setState({apiStatus: apiStatusConstant.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${search}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const formattedData = data.videos.map(eachItem => ({
        id: eachItem.id,
        channel: {
          name: eachItem.channel.name,
          profileImageUrl: eachItem.channel.profile_image_url,
        },
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))
      this.setState({
        videosList: formattedData,
        apiStatus: apiStatusConstant.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstant.failure})
    }
  }

  getVideosList = () => {
    const {videosList} = this.state

    const noVideos = videosList.length === 0

    return noVideos ? (
      <ThemeChange.Consumer>
        {value => {
          const {darkTheme} = value
          const theme = darkTheme ? 'dark' : 'light'
          return (
            <NoVideoCon theme={theme}>
              <NoVideoImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <NoVideoHead theme={theme}>No Search results found</NoVideoHead>
              <NoVideoPara>
                Try different key words or remove search filter
              </NoVideoPara>
              <RetryVideosButton
                type="button"
                onClick={this.retryVideoItemDetails}
              >
                Retry
              </RetryVideosButton>
            </NoVideoCon>
          )
        }}
      </ThemeChange.Consumer>
    ) : (
      <VideoListCon>
        {videosList.map(eachVideoItem => (
          <VideoItem key={eachVideoItem.id} videoItem={eachVideoItem} />
        ))}
      </VideoListCon>
    )
  }

  getHomeFailureView = () => (
    <ThemeChange.Consumer>
      {value => {
        const {isDarkTheme} = value
        const theme = isDarkTheme ? 'dark' : 'light'
        const imgUrl = isDarkTheme
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
            <RetryVideosButton type="button" onClick={this.getVideos}>
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
        const {isDarkTheme} = value
        return (
          <LoaderCon data-testid="loader">
            <Loader
              type="ThreeDots"
              color={isDarkTheme ? '#ffffff' : '#000000'}
              height="50"
              width="50"
            />
          </LoaderCon>
        )
      }}
    </ThemeChange.Consumer>
  )

  onClickClose = () => {
    this.setState({popUp: false})
  }

  addPopUp = () => (
    <PopUpCon data-testid="banner">
      <PopUpContext>
        <PopUpLogo
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <PopUpContextHead>
          Buy Nxt Watch Premium prepaid plans with <br />
          UPI
        </PopUpContextHead>
        <GetButton>GET IT NOW</GetButton>
      </PopUpContext>
      <CloseButton
        type="button"
        data-testid="close"
        onClick={this.onClickClose}
      >
        <IoMdClose size={22} />
      </CloseButton>
    </PopUpCon>
  )

  renderApiStatusView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstant.success:
        return this.getVideosList()
      case apiStatusConstant.failure:
        return this.getHomeFailureView()
      case apiStatusConstant.inProgress:
        return this.getLoadingView()
      default:
        return null
    }
  }

  render() {
    const {search, popUp} = this.state
    return (
      <ThemeChange.Consumer>
        {value => {
          const {darkTheme} = value
          const theme = darkTheme ? 'dark' : 'light'
          const color = darkTheme ? '#94a3b8' : 'black'
          return (
            <Main data-testid="home">
              <Header />
              <HomeCon>
                <SideMenu />
                <SearchAndList theme={theme}>
                  {popUp && this.addPopUp()}
                  <SearchCon>
                    <InputBar
                      type="search"
                      placeholder="Search"
                      value={search}
                      onChange={this.onChangeSearchInput}
                      onKeyDown={this.onEnterSearch}
                    />
                    <SearchButton
                      theme={theme}
                      data-testid="searchButton"
                      type="button"
                      onClick={this.onClickSearchButton}
                    >
                      <AiOutlineSearch color={color} size={18} />
                    </SearchButton>
                  </SearchCon>
                  {this.renderApiStatusView()}
                </SearchAndList>
              </HomeCon>
            </Main>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}
export default Home
