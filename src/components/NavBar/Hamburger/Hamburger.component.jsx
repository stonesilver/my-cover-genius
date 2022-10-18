import './Hamburger.styles.css';

const Hamburger = () => {
  return (
    <label htmlFor='check' className='bar'>
      <input id='check' type='checkbox' />

      <span className='top'></span>
      <span className='middle'></span>
      <span className='bottom'></span>
    </label>
  );
};

export default Hamburger;
