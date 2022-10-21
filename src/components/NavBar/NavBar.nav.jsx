import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Hamburger from './Hamburger/Hamburger.component';
import './Navbar.styles.css';

const dropdown = [
  {
    name: 'API',
    icon: '/plus.svg',
  },
  {
    name: 'Company',
    icon: '/arrow-down.svg',
  },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleMobileMenu = () => {
    setOpen((prevS) => !prevS);
  };

  return (
    <header className='bg-gray-25 nav-bar'>
      <nav className=' d-flex justify-content-between align-items-center nav-bar-container'>
        <img src='/img/logo.webp' alt='brand logo' className='brand-logo' />
        <div className='d-none d-md-flex justify-content-around nav-links'>
          <ul className='d-flex p-0 m-0 list-unstyled'>
            {['For Individuals', 'Plans'].map((link) => (
              <li key={link} className='px-3 text-gray-700 nav-link'>
                {link}
              </li>
            ))}
          </ul>

          <ul className='d-flex p-0 m-0 list-unstyled'>
            {['Claims', 'API', 'Company'].map((link) => (
              <li key={link} className='px-3 text-gray-700 nav-link'>
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className='d-none d-md-flex gap-3'>
          <Button variant='gray-100' className='text-primaryBlack rounded-1'>
            Log in
          </Button>
          <Button variant='secondary' className='text-white rounded-1'>
            Get Covered
          </Button>
        </div>
        <Hamburger open={open} toggleMobileMenu={toggleMobileMenu} />

        <div className={`mobile-nav ${!open ? 'zoom-out' : ''}`}>
          {['For Individuals', 'Plans', 'Claims'].map((link) => (
            <p key={link} className='mobile-nav-item'>
              {link}
            </p>
          ))}
          {dropdown.map(({ name, icon }) => (
            <div key={name} className='mobile-nav-dropdown mobile-nav-item'>
              <p className='mobile-nav-dropdown-link'>{name}</p>
              <img src={icon} alt='plus' className='mobile-nav-dropdown-icon' />
            </div>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
