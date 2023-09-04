import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import ThemeChange from '../../context/ThemeChange'

import {
  LoginCon,
  Card,
  WebsiteLogo,
  CheckboxCon,
  InputLabel,
  InputBar,
  LoginButton,
  ErrorMsg,
  CheckBoxLabel,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    isChecked: false,
    showError: false,
    errorMsg: '',
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onClickChecked = () => {
    this.setState(prevState => ({isChecked: !prevState.isChecked}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onSubmitError = errorMsg => {
    this.setState({showError: true, errorMsg})
  }

  login = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitError(data.error_msg)
    }
  }

  render() {
    const {username, password, isChecked, showError, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <ThemeChange.Consumer>
        {value => {
          const {darkTheme} = value

          const websiteImage = darkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          const theme = darkTheme ? 'dark' : 'light'

          return (
            <LoginCon theme={theme}>
              <Card theme={theme} onSubmit={this.login}>
                <WebsiteLogo src={websiteImage} alt="website logo" />
                <InputLabel theme={theme} htmlFor="username">
                  USERNAME
                </InputLabel>
                <InputBar
                  id="username"
                  type="text"
                  value={username}
                  onChange={this.onChangeUserName}
                  placeholder="Username"
                />
                <InputLabel
                  theme={theme}
                  htmlFor="password"
                  className="input-label"
                >
                  PASSWORD
                </InputLabel>
                {isChecked ? (
                  <InputBar
                    id="password"
                    type="text"
                    value={password}
                    onChange={this.onChangePassword}
                  />
                ) : (
                  <InputBar
                    id="password"
                    type="password"
                    value={password}
                    onChange={this.onChangePassword}
                    placeholder="Password"
                  />
                )}
                <CheckboxCon>
                  <input
                    type="checkbox"
                    id="check"
                    value={isChecked}
                    onClick={this.onClickChecked}
                  />
                  <CheckBoxLabel theme={theme} htmlFor="check">
                    Show Password
                  </CheckBoxLabel>
                </CheckboxCon>
                <LoginButton type="submit" className="">
                  Login
                </LoginButton>
                {showError ? <ErrorMsg>*{errorMsg}</ErrorMsg> : null}
              </Card>
            </LoginCon>
          )
        }}
      </ThemeChange.Consumer>
    )
  }
}

export default Login
