import { ReactComponent as AffordableMainIcon } from '../../../assets/svg/affordable/main.svg';
import { ReactComponent as BackIcon } from '../../../assets/svg/affordable/back.svg';
import { ReactComponent as BallIcon } from '../../../assets/svg/affordable/ball.svg';
import { ReactComponent as PaperMainIcon } from '../../../assets/svg/paper-work/main.svg';
import { ReactComponent as TriangleIcon } from '../../../assets/svg/paper-work/triangle.svg';
import { ReactComponent as AddedBusinessMainIcon } from '../../../assets/svg/added-business/main.svg';
import { ReactComponent as ShieldIcon } from '../../../assets/svg/added-business/shield.svg';
import './AllRoundInsurance.styles.scss';

const affordableIcon = (
  <div className='all-round-insurance-services-containter-service-affordable-icon'>
    <AffordableMainIcon className='affordable-icon main' />
    <BackIcon className='affordable-icon back' />
    <BallIcon className='affordable-icon ball' />
  </div>
);

const paperWorkIcon = (
  <div className='all-round-insurance-services-containter-service-paper-work-icon'>
    <PaperMainIcon className='paper-work-icon main-box' />
    <TriangleIcon className='paper-work-icon triangle' />
  </div>
);

const addedBusinessIcon = (
  <div className='all-round-insurance-services-containter-service-added-business-icon'>
    <AddedBusinessMainIcon className='added-business-icon main-shield' />
    <ShieldIcon className='added-business-icon shield' />
  </div>
);

const cardItem = [
  {
    title: 'Affordable',
    icon: affordableIcon,
    desc: 'Get affordable insurance coverage that fits your budget.',
  },
  {
    title: 'No Paperwork',
    icon: paperWorkIcon,
    desc: 'We are online! Get your business covered without leaving your home or filling out long forms.',
  },
  {
    title: 'Addes Business Value',
    icon: addedBusinessIcon,
    desc: 'Focus on your KPIs while we worry about your business risks and your staff.',
  },
];

const AllRoundInsurance = () => {
  return (
    <div className='all-round-insurance'>
      <p className='all-round-insurance-heading'>
        Experience all-around insurance for SME, startup or large business.
      </p>
      <p className='all-round-insurance-sub-text'>
        We enable every kind business grow with genuine insurance coverage
      </p>
      <div className='all-round-insurance-services-containter'>
        {cardItem.map(({ title, icon, desc }) => (
          <div
            key={title}
            className='all-round-insurance-services-containter-service'
          >
            {/* <img
              src={icon}
              alt='service'
              className='all-round-insurance-services-containter-service-icon scale-icon'
            /> */}
            {icon}
            <p className='all-round-insurance-services-containter-service-title'>
              {title}
            </p>
            <p className='all-round-insurance-services-containter-service-body'>
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllRoundInsurance;
