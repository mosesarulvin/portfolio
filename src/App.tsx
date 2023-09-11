import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/portfolio/" element={<Home/>} />
        <Route path="/portfolio/about" element={<About/>} />
        <Route path="/portfolio/contact" element={<Contact/>} />
        <Route path="/portfolio/projects" element={<Portfolio/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
