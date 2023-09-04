import styled from 'styled-components'

export const SideMenuCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90vh;
  width: 15vw;
  background-size: cover;
  background-color: ${props =>
    props.theme === 'dark' ? '#212121' : '#ffffff'};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuButtonsCon = styled.ul`
  width: 15vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-size: cover;
  margin-top: 30px;
  padding: 0px;
`
export const MenuButton = styled.li`
  background-color: transparent;
  border-width: 0px;
  font-size: 18px;
  width: 250px;
  height: 50px;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: ${props => {
    const {theme} = props
    const color = theme === 'dark' ? '#424242' : '#e2e8f0'
    return props.isActive ? color : ''
  }};
  color: ${props => (props.theme === 'dark' ? '#ffffff' : '#000000')};
`
export const MenuButtonName = styled.p`
  padding-left: 10px;
`
export const ContactUsCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  color: ${props => (props.theme === 'dark' ? ' #f9f9f9' : '#231f20')};
`
export const ContactUsImageCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`
export const ContactUsHead = styled.p`
  font-size: 20px;
`
export const ContactImage = styled.img`
  width: 40px;
  height: 40px;
  margin: 8px;
`
export const ContactPara = styled.p`
  font-size: 19px;
  font-weight: bold;
`
