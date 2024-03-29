import './FooterSchedule.css'
import user from '../../assets/icons/user.svg';
import bus from '../../assets/icons/bus.svg';
import hour from '../../assets/icons/hour.svg';
import { useNavigate, useParams } from "react-router-dom";
import { message, Popconfirm } from 'antd';
import AuthService from '../../services/usersService/AuthService';

function FooterSchedule() {

  const navigate = useNavigate()
  const { idLine } = useParams();

  const confirm = () => {
    message.success('Se ha cerrado sesion');
    AuthService.logout()
    window.location.reload();
  };
  const cancel = (e) => {
    console.log(e);
    message.error('Cancelado');
  };

  return (
    <div className="bodyFooter">
        <div className='scheduleHour' onClick={()=>navigate(`/Line/${idLine}/schedule`)}>
        <img src={hour} alt="Horas" />
        <p>Horario</p>
        </div>
        <div className='scheduleBus' onClick={()=>navigate(`/Line/${idLine}/BusStop`)}>
        <img src={bus} alt="Paradas" />
        <p>Paradas</p>
        </div>
      <Popconfirm
        title="Cerrar sesion"
        description="Estas seguro que quieres Cerrar sesion?"
        onConfirm={() => confirm()}
        onCancel={() => cancel()}
        okText="Si"
        cancelText="No">
        <div className="scheduleUser">
          <img src={user} alt="Usuario" />
          <p>Usuario</p>
        </div>
      </Popconfirm>
    </div>
  );
}

export default FooterSchedule