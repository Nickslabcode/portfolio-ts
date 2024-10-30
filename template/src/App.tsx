import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.tsx';
import Projects from './views/Projects.tsx';
import Home from './views/Home.tsx';
import DetailedProjectView from './views/DetailedProjectView.tsx';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<DetailedProjectView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
