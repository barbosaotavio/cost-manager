import {Link} from 'react-router-dom'
function Navbar() {
   
    return(
        <ul>
        <li>
          <Link to= '/'>Home</Link>
        </li>
        <li>
          <Link to= '/Empresa'>Empresa</Link>
        </li>
        <li>
          <Link to= '/Contato'>Contato</Link>
        </li>
      </ul>
    )

}

export default Navbar