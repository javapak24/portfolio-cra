import React from 'react';
import logo from '../logo.png';
import { Container, Image, Menu } from 'semantic-ui-react';

export default function MyHeader() {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" href="#/" header>
            <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
            Javapak
          </Menu.Item>
          <Menu.Item as="a" href="#/">
            Home
          </Menu.Item>
          <Menu.Item as="a" href="#/portfolio">
            Portfolio
          </Menu.Item>
          <Menu.Item as="a" href="#/contact">
            Contact
          </Menu.Item>
          <Menu.Item as="a" href="#/casestudy">
            Case Study
          </Menu.Item>
        </Container>
      </Menu>
    </div>
  );
}
