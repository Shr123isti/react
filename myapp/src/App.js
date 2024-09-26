import Home from './component/Home';
import Navbar from './component/Navbar';
import About from './component/About';
import Contact from './component/Contact';

import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
   
      </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
