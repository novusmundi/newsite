import 'antd/dist/antd.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js";
import 'bootstrap/dist/js/bootstrap.min.js'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Index from './pages/Index'
import Home from './pages/Home'

import ReactGA from 'react-ga4';
import Post from './pages/Post';

const TRACKING_ID = "UA-220129804-1"; // YOUR_OWN_TRACKING_ID

try {
  setTimeout(_ => {
    const ga4react = new ReactGA(TRACKING_ID);
    ga4react.initialize().catch(err => console.error(err));
  }, 4000);
} catch (err) {
      console.error(err);
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Index/>}/>
          <Route path="/test" element={<Home/>}/>
          <Route path="/blog/:id" element={<Post/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
