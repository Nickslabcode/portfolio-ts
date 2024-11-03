import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar.tsx';
import Projects from './views/Projects.tsx';
import Home from './views/Home.tsx';
import DetailedProjectView from './views/DetailedProjectView.tsx';
import { ThemeProvider } from './providers/ThemeProvider.tsx';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<DetailedProjectView />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
