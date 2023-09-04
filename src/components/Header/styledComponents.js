import styled from 'styled-components'

export const LargeNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};

  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MobileNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MobileLogoutButton = styled.button`
  background-color: transparent;
  border-width: 0px;
`

export const HomeLogo = styled.img`
  width: 180px;
  height: 45px;
  @media screen and (max-width: 768px) {
    width: 140px;
    height: 35px;
  }
`
export const ThemeProfileLogout = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 110px;
  }
`
export const ProfileImage = styled.img`
  width: 30px;
  height: 30px;
  margin: 30px;
`
export const LogoutButton = styled.button`
  border-radius: 2px;
  border-width: 2px;
  background-color: transparent;
  border-style: solid;
  width: 80px;
  height: 30px;
  font-size: 15px;
  border-color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#3b82f6')};
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#3b82f6')};
`
export const PopupContainer = styled.div`
  border-radius: 10px;
  padding: 20px;
  background-color: ${props =>
    props.theme === 'dark' ? '#231f20' : '#f4f4f4'};
`
export const ThemeButton = styled.button`
  background-color: transparent;
  border-width: 0px;
`
export const CancelButton = styled.button`
  color: ${props => (props.theme === 'dark' ? '#f1f1f1' : '#000000')};
  border-width: 2px;
  border-radius: 7px;
  border-style: solid;
  margin: 10px;
  width: 80px;
  height: 30px;
  font-size: 15px;
  background-color: transparent;
  border-color: ${props => (props.theme === 'dark' ? '#f1f1f1' : '#000000')};
`
export const ConfirmButton = styled.button`
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#000000')};
  width: 80px;
  height: 30px;
  font-size: 15px;
  background-color: #3b82f6;
  border-width: 0px;
  border-radius: 7px;
  margin: 10px;
`
export const LogoutMsg = styled.p`
  color: ${props => (props.theme === 'dark' ? '#f4f4f4' : '#000000')};
`
