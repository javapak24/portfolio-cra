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
      <Header as='h1'>Hello!</Header>
      <h1>Web Developer</h1>
      <Grid columns={2} divided>
    <GridRow>
      <GridColumn>
      <Image src = {mainpic} size='small' circular />
        </GridColumn>
        <GridColumn>
        <p id='main_bio'>
        My name is Muhammad Java. I'm a web developer from Cape Cod, Massachusetts. 
        </p>
          </GridColumn>
        </GridRow>
        </Grid>
    
      </Container>
    </div>
  )
}