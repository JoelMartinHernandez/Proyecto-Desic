import './RegisterOrLogin.css'
import { useNavigate } from "react-router-dom";

const RegisterOrLogin = () => {
  const navigate = useNavigate()

  return (
    <div className="bodyRL">
      <div className='textRL'>
        <h1>Bienvenido</h1>
        <h3>Que deseas hacer</h3>
      </div>
      <div className="loginButtonRL" onClick={() => navigate("/login")}>
        <p>Iniciar sesion</p>
      </div>
      <div className="registerButtonRL" onClick={() => navigate("/register")}>
        <p>Registrarse</p>
      </div>
    </div>
  );
}

export default RegisterOrLogin