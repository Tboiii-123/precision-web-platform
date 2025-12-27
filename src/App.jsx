import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';

import Marketing from './Market';
import Home from './Home';
import Developers from './Developers';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home/>} />
      
        <Route path="/developers" element={<Developers />} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/marketing" element={<Marketing />} />
   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
