import React from "react";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import { useContext } from 'react';
import AuthService from "./services/usersService/AuthService";
import { RolesContext } from "./context/roles";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Route,
  Routes,
  BrowserRouter,
} from 'react-router-dom';

import UpdateLine from './components/updateLine/UpdateLine';
import AddLine from './components/addLine/AddLine';
import Home from './pages/home/Home';
import Lines from "./pages/lines/Lines";
import Register from './pages/auth/register/Registe';
import Login from './pages/auth/login/Login';
import RegisterOrLogin from './components/registreOrLogin/RegistreOrLogin';

function App() {

  const logged = AuthService.isLoggedIn();
  const roles = useContext(RolesContext);
  console.log(logged);

  if (logged) {
    const newRole = AuthService.getMyRole();
    roles.role = newRole
  }

  

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<RegisterOrLogin/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/login" element={<Login/>} />
      <Route element={<PrivateRoute permittedRole='administrator' logged={logged} />}>
        <Route path="/home" element={<Home/>} />
        <Route path="/Line" element={<Lines/>} />
      </Route>
      <Route element={<PrivateRoute permittedRole='user' logged={logged} />}>
        <Route path="/user/home"/>
        <Route path="/user/line"/>
      </Route>


    </Routes>
    </BrowserRouter>
  );
}

export default App;

        {/* <Route path="/" element={<RegisterOrLogin />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <PrivateRoute path="/home" element={<Home/>}allowedRoles={['administrator']}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/add" element={<AddLine />}/>
        <Route path="/update" element={<UpdateLine />}/> */}