import { ReactComponent as DesktopIcon } from '../../../assets/svg/desktop.svg';
import { ReactComponent as MobileIcon } from '../../../assets/svg/mobile.svg';
import './GetInsurance.styles.scss';

const details = [
  {
    title: 'Via our Web Portal',
    icon: <DesktopIcon className='get-insurance-grid-left-row-card-icon' />,
    desc: 'Conveniently manage all your business plans and staff from our web portal.',
    link: 'Get covered now',
  },
  {
    title: 'Via our Mobile App',
    icon: <MobileIcon className='get-insurance-grid-left-row-card-icon' />,
    desc: 'Your staff also enjoys the coverage from our user-friendly mobile app.',
    link: 'See the App',
  },
];

const teams = [
  '/img/team/1.webp',
  '/img/team/2.webp',
  '/img/team/3.webp',
  '/img/team/4.webp',
];

const GetInsurance = () => {
  return (
    <section className='get-insurance'>
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
                {icon}
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
          {teams.map((team) => (
            <img
              key={team}
              src={team}
              alt='teams'
              className='get-insurance-grid-right-masked-img'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInsurance;
