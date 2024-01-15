import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo.jpg";
import "./Nav.css"
import Menu from '@mui/icons-material/Dehaze';
import Close from "../../assets/close.svg";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


function Navbar()
{
    // const [navbarOpen, setNavbarOpen] = useState(false);
    const [nav, setNav] = useState(false);

    const handleNav = () => {
      setNav(!nav);
    };

    const navItems = [
      {id: 1, text: 'Home', link: '/'},
      {id: 2, text: 'Portfolio', link: '/portfolio'},
      {id: 3, text: 'Book', link: 'https://square.site/book/L82GHZWPA3Q5R/eztattzink-gaithersburg-md'},
    ];

    return (
      <div className="Na">
        <Link to='/'><img src={Logo} alt='' /></Link>

        <ul className='desktop'>
          {navItems.map(item => (
            <li key={item.id} className='list'>
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>

        <div onClick={handleNav} className='Nav_b'>
            {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>

        <ul className={nav ? 'mobile'
                           : 'mobile_b'}
        >
          <Link to='/'><img src={Logo} alt='' className="i"/></Link>
          {navItems.map(item => (
            <Link to={item.link}><li key={item.id} className='mobile_items'
            >
              {item.text}
            </li> </Link>
          ))}
        </ul>
      </div>
    );

}

export default Navbar;