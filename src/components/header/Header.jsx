import React, {useState} from "react";
import './Header.css';
import Logo from '../../assets/logo-lopes-moda.png';

const Header = () => {
    const [Menu, setMenu] = useState(false);

    const menuToggle = () =>{
        setMenu(!Menu);
    }
    return ( 
        <>
            <header>
                <img src={Logo} alt="logo" id="logo"/>
                <button className="hamburger" onClick={menuToggle}>
                    ☰
                </button>
                <nav className={Menu ? "open" : ""}>
                    <ul>
                        <li><a href="#">HOME</a></li>
                        <li><a href="#">SERVIÇOS</a></li>
                        <li><a href="#">CONTATOS</a></li>
                    </ul>
                </nav>
            </header>
        </>
     );
}
 
export default Header;