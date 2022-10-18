import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './BespokePlans.styles.scss';

const BespokePlans = () => {
  const [activeTab, setActiveTab] = useState('Auto');
  return (
    <div className='bespoke-plans'>
      <p className='bespoke-plans-intro'>BespokePlans</p>
      <p className='bespoke-plans-title'>
        Tailor-made plans suited for your business
      </p>
      <p className='bespoke-plans-sub-text'>
        We offer flexible and innovative insurance coverage for every aspect of
        your business
      </p>
      <div className='bespoke-plans-breadcrumb-btn'>
        {['Auto', 'Health', 'Others'].map((item) => (
          <Button
            key={item}
            variant={activeTab === item ? 'primary-green' : 'gray-100'}
            onClick={() => setActiveTab(item)}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className='bespoke-plans-content-display'>
        <div className='bespoke-plans-content-display-auto'>
          {[0, 1, 2, 3].map((auto) => (
            <div
              key={auto}
              className='bespoke-plans-content-display-auto-card'
            ></div>
          ))}
        </div>
        <div className='bespoke-plans-content-display-others'>
          <img
            src='../../../assets/svg/auto.svg'
            alt='auto'
            className='bespoke-plans-content-display-others-icon'
          />{' '}
          <span className='bespoke-plans-content-display-others-title'>
            Comprehensive
          </span>
          <div className='bespoke-plans-content-display-others-body'>
            Covers all the vehicle used to drive growth in your business
          </div>
          <p className='bespoke-plans-content-display-others-link'>
            Learn More
            <img src='../../../assets/svg/arrow-right.svg' alt='arrow right' />
          </p>
        </div>
      </div>
    </div>
  );
};

export default BespokePlans;
