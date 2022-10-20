import Button from 'react-bootstrap/Button';
import { ReactComponent as GadgetIcon } from '../../../assets/svg/gadget.svg';
import { ReactComponent as AutoIcon } from '../../../assets/svg/auto.svg';
import { ReactComponent as HealthIcon } from '../../../assets/svg/health-cover.svg';
import { ReactComponent as LogisticsIcon } from '../../../assets/svg/logistics-cover.svg';
import { ReactComponent as OfficeContentIcon } from '../../../assets/svg/office-content.svg';
import { ReactComponent as TravelIcon } from '../../../assets/svg/travel-cover.svg';
import Col from 'react-bootstrap/Col';
import './Banner.styles.scss';

const Banner = () => {
  return (
    <div className='homepage-banner'>
      <div className='row'>
        <Col xs={12} lg={7} className='banner-text'>
          <p className='bold-text'>
            Set your <span className='special-text'>business</span> up for
            success with seamless insurance
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
                src='/img/services/Mask-group.webp'
                alt='center'
                className='center-image'
              />
              <div className='indicator'></div>
            </div>
            <div className='service-box gadget-cover'>
              <GadgetIcon className='gadget-icon' />
              <p className="gadget-cover-text">Gadget Cover</p>
            </div>
            <div className='service-box health-cover'>
              <HealthIcon className='health-icon' />
            </div>
            <div className='service-box logistic-cover'>
              <LogisticsIcon className='logitics-icon' />
            </div>
            <div className='service-box travel-cover'>
              <TravelIcon className='travel-icon' />
            </div>
            <div className='service-box office-content'>
              <OfficeContentIcon className='office-icon' />
            </div>
            <div className='service-box auto'>
              <AutoIcon className='auto-icon' />
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Banner;
