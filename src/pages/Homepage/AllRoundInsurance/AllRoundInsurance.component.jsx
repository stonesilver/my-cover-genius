import './AllRoundInsurance.styles.scss';

const cardItem = [
  {
    title: 'Affordable',
    icon: '/img/icon/Group-2.webp',
    desc: 'Get affordable insurance coverage that fits your budget.',
  },
  {
    title: 'No Paperwork',
    icon: '/img/icon/Group-3.webp',
    desc: 'We are online! Get your business covered without leaving your home or filling out long forms.',
  },
  {
    title: 'Addes Business Value',
    icon: '/img/icon/Group-1.webp',
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
            <img
              src={icon}
              alt='service'
              className='all-round-insurance-services-containter-service-icon scale-icon'
            />
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
