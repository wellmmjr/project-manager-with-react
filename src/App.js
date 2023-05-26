import {BrowserRouter, Router, Route, Switch, Link} from 'react-router-dom'
import {NewProject} from './componets/pages/NewProject'
import {Home} from './componets/pages/Home'

import Container from './components/layout/Container/Container';
import NavBar from './components/layout/navbar/NavBar';
import Footer from './components/layout/footer/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>

      <Switch>
        <Container customClass="min-heigth">
          <Route path="/" exact >
            <Home/>
          </Route>
          <Route path="/newproject" >
            <NewProject/>
          </Route>
        </Container>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
