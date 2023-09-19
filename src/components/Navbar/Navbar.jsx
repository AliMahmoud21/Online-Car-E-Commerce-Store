import logo from '../../assets/logo4.WEBP';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [navbar, setNavbar] = useState('navbar');

  // This is the function that will display the navbar when the user anytime clicks the bars icon
  const showNavbar = () => {
    setNavbar('navbar show');
  }

  // This function for closing the navbar when the user clicks the times icon
  const closeNavbar = () => {
    setNavbar('navbar');
  }

  // This useEffect for applying the background with '$secondaryColor' on the fixed navbar when the user scroll down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const headerClassName = scrolled ? 'header scrolled' : 'header';

  return (
    <header className={headerClassName}>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <nav className={navbar}>
        <ul className="menu">
          <li className="listItem">
            <a href="/" className="link">Used Cars</a>
          </li>
          <li className="listItem">
            <a href="/" className="link">New Cars</a>
          </li>
          <li className="listItem">
            <a href="/" className="link">Auctions</a>
          </li>
          <li className="listItem">
            <a href="/" className="link">Sell</a>
          </li>
        </ul>
        <FontAwesomeIcon icon={faTimes} className='icon closeIcon' onClick={closeNavbar} />
      </nav>

      <div className="signUp flex">
        <div className="text">Sign Up</div>
        <FontAwesomeIcon onClick={showNavbar} icon={faBars} className='icon toggleIcon' />
      </div>
    </header>
  )
}

export default Navbar;