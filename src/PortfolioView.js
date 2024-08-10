import { Container, Grid, GridColumn, GridRow, Header } from "semantic-ui-react";
import MyFooter from "./components/MyFooter";
import MyHeader from "./components/MyHeader";
import MyProjectCard from "./components/MyProjectCard";

function PortfolioView() {
  const projects = [
    {
      name:'MyFlix',
      image: '/images/avatar/large/matthew.png',
      descrption: 'A movie app',
      gitUrl: 'https://github.com/javapak24/myFlix-client',
      liveViewUrl: 'https://meek-paprenjak-57e330.netlify.app/'
  },
  {
    name:'javApp',
    image: '/images/avatar/large/matthew.png',
    descrption: 'Pokedex app',
    gitUrl: 'https://github.com/javapak24/javapp',
    liveViewUrl: 'https://javapak24.github.io/javapp/'
  },
  {
  name:'ToDoList',
  image: '/images/avatar/large/matthew.png',
  descrption: 'To do list app',
  gitUrl: 'https://github.com/javapak24/to-do-list-javapp',
  liveViewUrl: 'https://javapak24.github.io/to-do-list-javapp/'
  },
  {
    name:'Meet',
    image: '/images/avatar/large/matthew.png',
    descrption: 'Meet app',
    gitUrl: '',
    liveViewUrl: ''
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