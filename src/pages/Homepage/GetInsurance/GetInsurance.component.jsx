import './GetInsurance.styles.scss';

const details = [
  {
    title: 'Via our Web Portal',
    icon: '/img/icon/desktop.webp',
    desc: 'Conveniently manage all your business plans and staff from our web portal.',
    link: 'Get covered now',
  },
  {
    title: 'Via our Mobile App',
    icon: '/img/icon/mobile.webp',
    desc: 'Your staff also enjoys the coverage from our user-friendly mobile app.',
    link: 'See the App',
  },
];

const GetInsurance = () => {
  return (
    <div className='get-insurance'>
      <p className='get-insurance-intro'>Get insurance at your convenience</p>
      <p className='get-insurance-title'>
        Get your business covered from anywhere
      </p>
      <p className='get-insurance-sub-text'>
        MyCoverGenius is making insurance in Nigeria affordable, easy and
        accessible to everyone. Get covered from any of our multiple sales
        channels.
      </p>

      <div className='get-insurance-grid'>
        <div className='get-insurance-grid-left'>
          <div className='get-insurance-grid-left-row'>
            {details.map(({ title, icon, desc, link }) => (
              <div key={title} className='get-insurance-grid-left-row-card'>
                <img
                  src={icon}
                  alt='desktop'
                  className='get-insurance-grid-left-row-card-icon'
                />
                <div className='get-insurance-grid-left-row-card-body'>
                  <p className='get-insurance-grid-left-row-card-body-title'>
                    {title}
                  </p>
                  <p className='get-insurance-grid-left-row-card-body-desc'>
                    {desc}
                  </p>
                  <div className='get-insurance-grid-left-row-card-body-link'>
                    {link}
                    <img
                      src='/arrow-right.svg'
                      alt='arrow-right'
                      className='arrow-right'
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='get-insurance-grid-right'>
          <img
            src='/img/team.webp'
            alt='mask banner'
            className='get-insurance-grid-right-masked-img'
          />
        </div>
      </div>
    </div>
  );
};

export default GetInsurance;
