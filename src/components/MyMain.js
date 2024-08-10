import React from 'react'
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
      <Image src='https://picsum.photos/id/1/200/300' size='small' circular />
        </GridColumn>
        <GridColumn>
        <p>
        My name is Muhammad Java. I am a web developer from Cape Cod, Massachusetts. 
        Growing up I enjoyed playing video games and sports like basketball and football with my brother and our cousins.
        Now that I'm older, the love for those hobbies hasn't changed
        I always was interested in how things worked, especially electronics, and this led to me pursuing a career in coding. 
        </p>
          </GridColumn>
        </GridRow>
        </Grid>
    
      </Container>
    </div>
  )
}