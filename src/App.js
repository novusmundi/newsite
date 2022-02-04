import 'antd/dist/antd.min.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home2 from './pages/Home2'


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home2/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
