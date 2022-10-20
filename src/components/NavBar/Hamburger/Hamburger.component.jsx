import './Hamburger.styles.css';

const Hamburger = ({ open, toggleMobileMenu }) => {
  return (
    <label htmlFor='check' className='bar' onClick={toggleMobileMenu}>
      <span className={`top ${open ? 'top-active' : ''}`}></span>
      <span className={`middle ${open ? 'middle-active' : ''}`}></span>
      <span className={`bottom ${open ? 'bottom-active' : ''}`}></span>
    </label>
  );
};

export default Hamburger;
