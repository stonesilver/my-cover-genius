import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import './Banner.styles.scss';

const Banner = () => {
  return (
    <div className='homepage-banner'>
      <div className='row'>
        <Col xs={12} lg={7} className='banner-text'>
          <p className='bold-text'>
            Set your <span className='special-text'>business</span> up for success with
            seamless insurance
          </p>
          <p className='sub-text'>
            We protect all your hard work with affordable insurance to help your
            business recover from unplanned events quickly.
          </p>
          <Button variant='secondary' className='text-white mt-4 px-4'>
            Get Covered
          </Button>
        </Col>
        <Col xs={12} lg={5} className='banner-animation'>
          <div className='animation-container'>
            <div className='center-image-container'>
              <img
                src='/img/Mask-group.webp'
                alt='center'
                className='center-image'
              />
              <div className='indicator'></div>
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Banner;
