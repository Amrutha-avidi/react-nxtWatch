import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'
import ThemeChange from './context/ThemeChange'
import ActiveMenuItemContext from './context/ActiveMenuItemContext'
import SavedVideoContext from './context/SavedVideoContext'
import ProtectedRoute from './components/ProtectedRoute'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoItemCard from './components/VideoItemCard'

import SavedVideos from './components/SavedVideos'

import NotFound from './components/NotFound'

import './App.css'

// Replace your code here
const activeMenuConstants = {
  initial: 'INITIAL',
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED_VIDEOS',
}

class App extends Component {
  state = {
    darkTheme: false,
    activeMenu: activeMenuConstants.initial,
    savedVideosList: [],
    isSaved: false,
  }

  changeTheme = () => {
    this.setState(prevState => ({darkTheme: !prevState.darkTheme}))
  }

  changeMenu = value => {
    this.setState({activeMenu: value})
  }

  addToSavedVideos = videoDetails => {
    this.setState(prevState => ({
      savedVideosList: [...prevState.savedVideosList, videoDetails],
    }))
  }

  deleteFromSavedVideos = videoDetails => {
    const {savedVideosList} = this.state
    const updatedSavedVideosList = savedVideosList.filter(
      each => each.id !== videoDetails.id,
    )
    this.setState({savedVideosList: updatedSavedVideosList})
  }

  updatedSavedVideos = videoDetails => {
    const {isSaved} = this.state
    if (isSaved) {
      this.deleteFromSavedVideos(videoDetails)
    } else {
      this.addToSavedVideos(videoDetails)
    }
  }

  updateSave = videoDetails => {
    this.setState(prevState => ({isSaved: !prevState.isSaved}))
    this.updatedSavedVideos(videoDetails)
  }

  render() {
    const {darkTheme, activeMenu, isSaved, savedVideosList} = this.state
    return (
      <ThemeChange.Provider
        value={{
          darkTheme,
          changeTheme: this.changeTheme,
        }}
      >
        <SavedVideoContext.Provider
          value={{
            isSaved,
            savedVideosList,
            addToSavedVideos: this.addToSavedVideos,
            deleteFromSavedVideos: this.deleteFromSavedVideos,
            updateSave: this.updateSave,
          }}
        >
          <ActiveMenuItemContext.Provider
            value={{
              activeMenu,
              changeMenu: this.changeMenu,
            }}
          >
            <Switch>
              <Route exact path="/login" component={Login} />
              <ProtectedRoute exact path="/" component={Home} />
              <ProtectedRoute exact path="/trending" component={Trending} />
              <ProtectedRoute exact path="/gaming" component={Gaming} />
              <ProtectedRoute
                exact
                path="/saved-videos"
                component={SavedVideos}
              />
              <ProtectedRoute
                exact
                path="/videos/:id"
                component={VideoItemCard}
              />
              <Route exact path="/bad-path" component={NotFound} />
              <Redirect to="/not-found" />
            </Switch>
          </ActiveMenuItemContext.Provider>
        </SavedVideoContext.Provider>
      </ThemeChange.Provider>
    )
  }
}
export default App
