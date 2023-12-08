import './HeaderSchedule.css'
import back from '../../assets/icons/back.svg';
import { useNavigate } from 'react-router-dom';


function HeaderSchedule() {
  const navigate=useNavigate()
  return (
    <div className="bodyHeader">
      <div className="back" onClick={()=>navigate(`/Line`)}>
        <img src={back} alt="Volver" />
      </div>
      <div className="pageTitle">
        <h1>Horas</h1>
      </div>

    </div>
  );
}

export default HeaderSchedule