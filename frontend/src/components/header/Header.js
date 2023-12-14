import './Header.css'
import help from '../../assets/icons/help.svg';
import dropdown from '../../assets/icons/dropdown.svg';
import options from '../../assets/icons/options.svg';

function Header() {
  return (
    <div className="bodyHeader">
      <div className="pageTitle">
        <h1>Líneas</h1>
      </div>
      <div className='helpHeader'>
      <a href="/Documentacion_ayuda_administrador/Documentacion_de_ayuda_administrador.html" target="Blank">
        <img src={help} alt="Ayuda" />
      </a>
      </div>
    </div>
  );
}

export default Header