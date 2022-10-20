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
              <div className='indicator'>
                <div className='indicator-pointer'></div>
              </div>
            </div>
            <div className='service-box gadget-cover'>
              <GadgetIcon className='icon gadget-icon' />
              <div className='service-label gadget-label' label='Gadget Cover'>
                <img
                  src='/img/arrow-left.png'
                  alt='direction arrow'
                  className='arrow-bg'
                />
              </div>
            </div>

            <div className='service-box health-cover'>
              <HealthIcon className='icon health-icon' />
              <div className='service-label health-label' label='Health Cover'>
                <img
                  src='/img/arrow-left.png'
                  alt='direction arrow'
                  className='arrow-bg'
                />
              </div>
            </div>

            <div className='service-box logistic-cover'>
              <LogisticsIcon className='icon logistic-icon' />
              <div
                className='service-label logistic-label'
                label='Logistic Cover'
              >
                <img
                  src='/img/arrow-left.png'
                  alt='direction arrow'
                  className='arrow-bg'
                />
              </div>
            </div>

            <div className='service-box travel-cover'>
              <TravelIcon className='icon travel-icon' />
              <div
                className='service-label left-label travel-label'
                label='Travel Cover'
              >
                <img
                  src='/img/arrow-right.png'
                  alt='direction arrow'
                  className='arrow-bg'
                />
              </div>
            </div>

            <div className='service-box office-content'>
              <OfficeContentIcon className='icon office-icon' />
              <div
                className='service-label left-label office-label'
                label='Office Content'
              >
                <img
                  src='/img/arrow-right.png'
                  alt='direction arrow'
                  className='arrow-bg'
                />
              </div>
            </div>

            <div className='service-box auto'>
              <AutoIcon className='icon auto-icon' />
              <div
                className='service-label left-label auto-label'
                label='Auto Cover'
              >
                <img
                  src='/img/arrow-right.png'
                  alt='direction arrow'
                  className='arrow-bg'
                />
              </div>
            </div>
          </div>
        </Col>
      </div>
    </div>
  );
};

export default Banner;
