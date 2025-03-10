
import './App.css';


import {BrowserRouter,Routes,Route} from "react-router-dom";

//pages
import Home from './pages/Home';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import OurStory from './pages/OurStory';
import NotFound from './pages/NotFound';


const  App = () => {
  return(
  <div className='App'>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/Menu' element={<Menu />} />
      <Route path='/Blog' element={<Blog />} />
      <Route path='/AboutUs' element={<AboutUs />} />
      <Route path='/Contact' element={<Contact/>} />
      <Route path='/OurStory' element={<OurStory/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
  </BrowserRouter>
 </div> 
  );
}

export default App;
