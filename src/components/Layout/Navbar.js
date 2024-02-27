import {Link} from 'react-router-dom'
import Styles from './Navbar.module.css'
function Navbar() {
   
    return(
        <ul className={Styles.list}>

        <li className={Styles.item}>
          <Link to= '/'>Home</Link>
        </li>
        <li className={Styles.item}>
          <Link to= '/Empresa'>Empresa</Link>
        </li>
        <li className={Styles.item}>
          <Link to= '/Contato'>Contato</Link>
        </li>
      </ul>
    )

}

export default Navbar