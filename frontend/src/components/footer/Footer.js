import './Footer.css'
import user from '../../assets/icons/user.svg';
import bus from '../../assets/icons/bus.svg';
import { useNavigate } from "react-router-dom";

function Footer() {

  const navigate=useNavigate()

    return (
      <div className="bodyFooter">
        <div className="lines" onClick={()=>navigate("/Line")}>
          <img src={bus} alt="Líneas" />
          <p>Líneas</p>
        </div>
        <div className="user">
          <img src={user} alt="Usuario" />
          <p>Usuario</p>
        </div>
      </div>
    );
  }
  
  export default Footer