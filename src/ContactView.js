import React from 'react';
import MyHeader from './components/MyHeader';
import MyFooter from './components/MyFooter';
import { Container, Header, Segment } from 'semantic-ui-react';

export default function ContactView() {
  return (
    <div>
      <Container text style={{ marginTop: '7em' }}>
        <MyHeader></MyHeader>
        <Header as="h1">Contact Me</Header>
        <Segment>
          Phone: 774-994-7146
          <br></br>
          <a href="mailto:ajava2424@gmail.com" target="_blank">
            Email: ajava2424@gmail.com
          </a>
          <br></br>
          <a href="https://www.linkedin.com/in/muhammad-java24" target="_blank">
            LinkedIn : www.linkedin.com/in/muhammad-java24
          </a>
        </Segment>
        <MyFooter></MyFooter>
      </Container>
    </div>
  );
}
