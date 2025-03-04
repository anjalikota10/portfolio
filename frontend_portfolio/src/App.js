import { Container, Navbar, Nav } from 'react-bootstrap';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import View_qualification from './Views/View_qualification';
import View_skills from './Views/View_skills';
import View_contact from './Views/View_contact';
import View_about from './Views/View_about';
import View_projects from './Views/View_projects';
function App() {
  return (
    <>
    <BrowserRouter>
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<View_about/>} />
        <Route path="/qualification" element={<View_qualification />} />
        <Route path="/skills" element={<View_skills />} />
        <Route path="/projects" element={<View_projects/>} />
        <Route path="/contactus" element={<View_contact/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
