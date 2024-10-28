import { Container, Grid, GridColumn, GridRow, Header } from "semantic-ui-react";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyProjectCard from "./components/MyProjectCard";
import img_1 from './img1new.png'
import img_2 from './img2.png'
import img_3 from './img3.png'
import img_4 from './img4.png'
import img_5 from './img5.png'
import img_6 from './img6.png'
import img_7 from './img7.png'
import img_8 from './img8.png'

function PortfolioView() {
  const projects = [
    {
      name:'MyFlix',
      image: img_1,
      description: 'A movie app',
      gitUrl: 'https://github.com/javapak24/myFlix-client',
      liveViewUrl: 'https://meek-paprenjak-57e330.netlify.app/'
  },
  {
    name:'javApp',
    image: img_2,
    description: 'Pokedex app',
    gitUrl: 'https://github.com/javapak24/javapp',
    liveViewUrl: 'https://javapak24.github.io/javapp/'
  },
  {
  name:'ToDoList',
  image: img_3,
  description: 'To do list app',
  gitUrl: 'https://github.com/javapak24/to-do-list-javapp',
  liveViewUrl: 'https://javapak24.github.io/to-do-list-javapp/'
  },
  {
    name:'Meet',
    image: img_4,
    description: 'Meet app',
    gitUrl: 'https://github.com/javapak24/meet-app/',
    liveViewUrl: 'https://javapak24.github.io/meet-app/'
  },
  {
    name:'NativeChatApp',
    image: img_5,
    description: 'A chat app built with react native',
    gitUrl: 'https://github.com/javapak24/chat-app',
    liveViewUrl: 'https://github.com/javapak24/chat-app'
  },
  {
    name:'myFlix-Angular',
    image: img_6,
    description: 'A movie app built with Angular',
    gitUrl: 'https://github.com/javapak24/myFlix-Angular',
    liveViewUrl: 'https://javapak24.github.io/myFlix-Angular/#/'
  },
  {
    name:'Simple Portfolio',
    image: img_7,
    description: 'A simple portfolio built with introductory html, css, and js.',
    gitUrl: 'https://github.com/javapak24/portfolio-website',
    liveViewUrl: 'https://javapak24.github.io/portfolio-website/'
  },
  {
    name:'React Portfolio',
    image: img_8,
    description: 'A more polished portfolio built with React',
    gitUrl: 'https://github.com/javapak24/portfolio-cra',
    liveViewUrl: 'https://javapak24.github.io/portfolio-cra/'
  }
  ]
    return (
      <div className="App">
      <Container text style={{ marginTop: '7em' }}>
       <MyHeader></MyHeader>
       <Header>My Portfolio</Header>
       <Grid columns={2} divided>
      <GridRow>
       {
        projects.map(project =>  <GridColumn><MyProjectCard card={project}></MyProjectCard></GridColumn> )
       }
       </GridRow>
       </Grid>
       <MyFooter></MyFooter>
      </Container>
      </div>
    );
  }
  
  export default PortfolioView;