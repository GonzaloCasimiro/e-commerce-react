import logo from "../img/salta-tech.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

export function Navbar() {
    return (    
      
      <><nav>
        <img src={logo} className="logo" />
        <ul>
          <li><a href="#encabezado">Inicio</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#sobremi">Acerca de mi</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <i className="fa-regular fa-circle-xmark"></i>
        </ul>
        <FontAwesomeIcon icon={faBars} />
        <p><FontAwesomeIcon icon={faCartShopping} /><span> 2</span></p>
      </nav>
      </>
    );
  }
  
                


/*<nav>
        <img className="logo" src={logo}/>
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Acerca de</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
        <a>
        <FontAwesomeIcon icon={faCartShopping} />
            <span> 2</span>
        </a>
      </nav>
      */