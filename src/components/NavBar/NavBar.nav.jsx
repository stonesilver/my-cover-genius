import Button from 'react-bootstrap/Button';
import Hamburger from './Hamburger/Hamburger.component';
import './Navbar.styles.css';

const NavBar = () => {
  return (
    <header className='bg-gray-25 nav-bar'>
      <nav className=' d-flex justify-content-between align-items-center nav-bar-container'>
        <img src='/img/logo.webp' alt='brand logo' className='brand-logo' />
        <div className='d-none d-md-flex justify-content-around nav-links'>
          <ul className='d-flex p-0 m-0 list-unstyled'>
            <li className='px-3 text-gray-700 nav-link'>For Individuals</li>
            <li className='px-3 text-gray-700 nav-link'>Plans</li>
          </ul>

          <ul className='d-flex p-0 m-0 list-unstyled'>
            <li className='px-3 text-gray-700 nav-link'>Claims</li>
            <li className='px-3 text-gray-700 nav-link'>API</li>
            <li className='px-3 text-gray-700 nav-link'>Company</li>
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
        <Hamburger />
      </nav>
    </header>
  );
};

export default NavBar;
