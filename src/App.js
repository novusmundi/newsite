import 'antd/dist/antd.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
