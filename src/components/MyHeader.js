import React from 'react'
import {
  Container,
  Image,
  Menu,
} from 'semantic-ui-react'

export default function MyHeader() {
  return (
    <div>
      <Menu fixed='top' inverted>
      <Container>
        <Menu.Item as='a' href ='#/' header>
        <Image size='mini' src='/logo.png' style={{ marginRight: '1.5em' }} />
        Java
        </Menu.Item>
        <Menu.Item as='a' href="#/">Home</Menu.Item>
        <Menu.Item as='a' href="#/portfolio">Portfolio</Menu.Item>
        <Menu.Item as='a' href="#/contact">Contact</Menu.Item>
      </Container>
    </Menu>
    </div>
  )
}