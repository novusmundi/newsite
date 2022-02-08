import 'antd/dist/antd.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import "jquery/dist/jquery.min.js";
import 'bootstrap/dist/js/bootstrap.min.js'

import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home3 from './pages/Home3'


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home3/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
