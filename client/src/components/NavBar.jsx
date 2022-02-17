import { Link } from 'react-router-dom';
import SideBar from './SideMenu';
import "./styles/NavBar.css"
import logo from "../assets/detalle2.png"
import SearchBar from './SearchBar';

export default function Navbar() {
  
  return (
    <>
<nav>
  <a href='#'> <img src={logo} className="logo-imagen"></img> </a>
  <ul>
    <li>
      <div>

      <SearchBar className='veamos' />
      </div>
      
    </li>
  </ul>
</nav>




    {/* <div className='contai'>
     

     <Link to="/home"> <h2  >POKEMONS XD</h2></Link>
   
      
      
    </div> */}
    </>
  );
}

