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
import Home from './pages/home/Home';
import Register from './pages/auth/register/Registe';
import Login from './pages/auth/login/Login';
import RegisterOrLogin from './components/registreOrLogin/RegistreOrLogin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterOrLogin />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/add" element={<AddLine />}/>
        <Route path="/update" element={<UpdateLine />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
