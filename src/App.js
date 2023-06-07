import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import NewProject from './components/pages/project/newProject/NewProject'
import Project from './components/pages/project/Project'
import ProjectGrid from './components/pages/project/projectGrid/ProjectGrid'
import Home from './components/pages/home/Home'

import Container from './components/layout/Container/Container';
import NavBar from './components/layout/navbar/NavBar';
import Footer from './components/layout/footer/Footer'

import './App.css';

function App() {
  return (
    <Router>
      <NavBar/>

      <Container customClass="min-heigth">
        <Routes>
            <Route path="/" exact element={<Home/>}/>
            <Route path="/projectGrid" element={<ProjectGrid/>} />
            <Route path="/project" element={<Project/>} />
            <Route path="/newproject" element={<NewProject/>} />
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
