import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import './BespokePlans.styles.scss';

const plans = [
  {
    title: 'Comprehensive',
    body: 'Covers all the vehicle used to drive growth in your business',
  },
  {
    title: 'Monthly Comp. Auto',
    body: 'Minimise vehicle risks with an affordable auto insurance.',
  },
  {
    title: 'Mini Comp. Auto',
    body: 'Get your vehicles on the road without worry on your budget.',
  },
  {
    title: '3rd Party Auto',
    body: 'Drive with confidence while you save on insurance costs.',
  },
];

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
            className={`${
              activeTab === item ? 'text-white' : 'text-primaryBlack'
            } px-md-3 action-btn`}
          >
            {item}
          </Button>
        ))}
      </div>
      <div className='bespoke-plans-content-display'>
        {activeTab === 'Auto' ? (
          <div className='bespoke-plans-content-display-auto'>
            {plans.map(({ title, body }) => (
              <div
                key={title}
                className='bespoke-plans-content-display-auto-card'
              >
                <img
                  src='/auto.svg'
                  alt='auto'
                  className='bespoke-plans-content-display-auto-card-icon'
                />
                <span className='bespoke-plans-content-display-auto-card-title'>
                  {title}
                </span>
                <p className='bespoke-plans-content-display-auto-card-body'>
                  {body}
                </p>
                <p className='bespoke-plans-content-display-auto-card-link'>
                  Learn More
                  <img
                    src='/arrow-right.svg'
                    alt='arrow right'
                    className='right-arrow-icon'
                  />
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className='bespoke-plans-content-display-others'>
            <h4>STILL IN DEVELOPMENT</h4>
          </div>
        )}
      </div>
    </div>
  );
};

export default BespokePlans;
