import React from 'react'
import MyHeader from './components/MyHeader'
import MyFooter from './components/MyFooter'
import { Container, Header } from 'semantic-ui-react'

export default function ContactView() {
  return (
    <div>
      <Container text style={{ marginTop: '7em' }}>
      <MyHeader></MyHeader>
      <Header as='h1'>Contact Me</Header>
      <MyFooter></MyFooter>
      </Container>
    </div>
  )
}