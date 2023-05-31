import { Router, Route, Routes, Link} from 'react-router-dom'
import {NewProject} from './componets/pages/project/newProject/NewProject'
import {Project} from './componets/pages/project/Project'
import {ProjectGrid} from './componets/pages/project/projectGrid/ProjectGrid'
import {Home} from './componets/pages/home/Home'

import Container from './components/layout/Container/Container';
import NavBar from './components/layout/navbar/NavBar';
import Footer from './components/layout/footer/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>

      <Routes>
        <Container customClass="min-heigth">
          <Route path="/" exact >
            <Home/>
          </Route>
          <Route path="/projectGrid" >
            <ProjectGrid/>
          </Route>
          <Route path="/project" >
            <Project/>
          </Route>
          <Route path="/newproject" >
            <NewProject/>
          </Route>
        </Container>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
