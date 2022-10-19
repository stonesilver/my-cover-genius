import './Footer.styles.scss';

const location = [
  {
    title: 'Office:',
    value: '8, Province Estate, Maruwa Bus-Stop, Lekki Phase 1',
  },
  {
    title: 'Email:',
    value: 'hello@mycovergenius.com',
  },
  {
    title: 'Phone:',
    value: '+234 8099988005',
  },
];

const socials = [
  '/img/icon/Facebook.png',
  '/img/icon/Instagram.png',
  '/img/icon/Linkedin.png',
  '/img/icon/twitter.png',
];

const navLinks = ['Home', 'FAQs', 'Sign Up/ Login', 'News'];
const products = [
  'Health Cover',
  'Auto Cover',
  'Travel Cover',
  'Gadgets Cover',
  'Office Content',
  'Delivery Cover',
];
const company = ['About Us', 'Resources', 'For Individuals', 'API'];
const legal = ['Privacy Policy', 'Cookies Policy', 'Terms & Conditions'];

const Footer = () => {
  return (
    <footer className='footer'>
      <img
        src='/img/logo.webp'
        alt='brand logo'
        className='footer-brand-logo'
      />
      <div className='footer-nav-category'>
        <div className='footer-nav-category-location nav-link-category'>
          {location.map(({ title, value }) => (
            <div key={title} className='footer-nav-category-location-flex-card'>
              <p className='footer-nav-category-location-flex-card-title'>
                {title}
              </p>
              <p className='footer-nav-category-location-flex-card-value'>
                {value}
              </p>
            </div>
          ))}
          <div className='footer-nav-category-location-socials'>
            {socials.map((social) => (
              <img
                key={social}
                src={social}
                alt='social'
                className='footer-nav-category-location-socials-icon'
              />
            ))}
          </div>
        </div>

        <div className='footer-nav-category-quick-links nav-link-category'>
          <div className='nav-link-category-title'>Quick Links</div>
          {navLinks.map((item) => (
            <p key={item} className='nav-link-category-link'>
              {item}
            </p>
          ))}
        </div>
        <div className='footer-nav-category-products nav-link-category'>
          <div className='nav-link-category-title'>Products</div>
          {products.map((item) => (
            <p key={item} className='nav-link-category-link'>
              {item}
            </p>
          ))}
        </div>
        <div className='footer-nav-category-company nav-link-category'>
          <div className='nav-link-category-title'>Company</div>
          {company.map((item) => (
            <p key={item} className='nav-link-category-link'>
              {item}
            </p>
          ))}
        </div>
        <div className='footer-nav-category-logal nav-link-category'>
          <div className='nav-link-category-title'>Legal</div>
          {legal.map((item) => (
            <p key={item} className='nav-link-category-link'>
              {item}
            </p>
          ))}
        </div>
      </div>
      <p className="footer-tag">mycovergenius © 2022 / ALL RIGHTS RESERVED</p>
    </footer>
  );
};

export default Footer;
