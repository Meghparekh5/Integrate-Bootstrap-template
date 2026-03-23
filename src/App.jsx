import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Pages from "./pages/Pages.jsx";
import Class from "./pages/Class.jsx";
import Schedule from "./pages/Schedule.jsx";
import Blog from "./pages/Blog.jsx";
import Contact from "./pages/Contact.jsx";
import Shop from "./pages/Shop.jsx";
import './App.css'
import Navmain from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navmain/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pages" element={<Pages />} />
        <Route path="/class" element={<Class />} />
        <Route path="/Schedule" element={<Schedule />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;