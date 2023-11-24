import './Header.css'
import dropdown from '../../assets/icons/dropdown.svg';
import options from '../../assets/icons/options.svg';

function Header() {
  return (
    <div className="bodyHeader">
      {/* <div className="dropdown">
        <img src={dropdown} alt="Barra desplegable" />
      </div> */}
      <div className="pageTitle">
        <h1>Líneas</h1>
      </div>
      {/* <div className="options">
        <img src={options} alt="Opciones" />
      </div> */}
    </div>
  );
}

export default Header