import Lines from './pages/lines/Lines';
import {
  Route,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import UpdateLine from './components/updateLine/UpdateLine';
import AddLine from './components/addLine/AddLine';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lines />}/>
        <Route path="/add" element={<AddLine />}/>
        <Route path="/update" element={<UpdateLine />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
