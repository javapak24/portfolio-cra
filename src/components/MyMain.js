import React from 'react'
import mainpic from '../portfoliopic.png'

import {
    Container,
    Grid,
    GridColumn,
    GridRow,
    Header,
    Image,
  } from 'semantic-ui-react'

export default function MyMain() {
  return (
    <div>
      <Container text style={{ marginTop: '7em' }}>
      <Header as='h1'>Muhammad Java</Header>
      <Grid columns={2} divided>
    <GridRow>
      <GridColumn>
      <Image src = {mainpic} size='small' circular />
        </GridColumn>
        <GridColumn>
        <p id='main_bio'>
        My name is Muhammad Java. I'm an up-and-coming web developer from Cape Cod, Massachusetts. This website, built with React.js, aims to portray a glimpse of me and the skills I have to offer. 
        </p>
          </GridColumn>
        </GridRow>
        </Grid>
    
      </Container>
    </div>
  )
}