import React from 'react';
import mainpic from '../portfoliopic.png';

import {
  Container,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Image,
  Segment,
} from 'semantic-ui-react';

export default function MyMain() {
  return (
    <div>
      <Container text style={{ marginTop: '7em' }}>
        <Header as="h1">Muhammad Java</Header>
        <Grid columns={2} divided>
          <GridRow>
            <GridColumn>
              <Image src={mainpic} size="small" circular />
            </GridColumn>
            <GridColumn>
              {/* <p id='main_bio'>
        My name is Muhammad Java. I'm an up-and-coming web developer from Cape Cod, Massachusetts. This website, that I built with React.js, aims to portray a glimpse of me and the skills I have to offer. 
        </p> */}
              <Segment style={{ textAlign: 'left' }}>
                Hi, my name is Muhammad Java, and I’m a mechanical engineering
                graduate from the University of Massachusetts Amherst, recently
                pivoting into tech after completing an intensive full-stack
                development bootcamp.
                <br></br>
                <br></br>
                I’ve gained hands-on experience with modern web technologies
                like React.js, Angular, Node.js, and AWS, and I’ve integrated AI
                tools like ChatGPT into my workflow to streamline
                problem-solving.
                <br></br>
                <br></br>
                My favorite professional experience was working as a
                door-to-door salesman, helping homeowners transition to solar
                energy, where I honed my communication skills and developed a
                passion for impactful solutions. I’m now looking to bring this
                blend of technical expertise, adaptability, and customer focus
                to a team committed to building innovative products.
                <br></br>
                <br></br>
              </Segment>
              <Segment>
                <a href="#/casestudy">
                  Click Here to Head to a Page Dedicated to a Few of My Case
                  Studies!
                </a>
              </Segment>
            </GridColumn>
          </GridRow>
        </Grid>
      </Container>
    </div>
  );
}
