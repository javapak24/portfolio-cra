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
          I’d love to hear from you! Whether you’re interested in collaborating
          on a web development project, have an exciting opportunity in tech, or
          just want to connect and share ideas, feel free to reach out. Let’s
          create something amazing together!
        </Segment>
        <Segment>
          Phone: 774-994-7146
          <br></br>
          <a href="mailto:ajava2424@gmail.com" target="_blank">
            Email: ajava2424@gmail.com
          </a>
          <br></br>
          <a href="https://www.linkedin.com/in/muhammad-java" target="_blank">
            LinkedIn : www.linkedin.com/in/muhammad-java
          </a>
        </Segment>
        <MyFooter></MyFooter>
      </Container>
    </div>
  );
}
