import './BespokeSolutions.styles.scss';

const items = ['Plans', 'Claim', 'Beneficiaries', 'Wallet'];

const BespokeSolutions = () => {
  return (
    <section className='bespoke-solutions'>
      <p className='bespoke-solutions-intro'>Bespoke solutions</p>
      <p className='bespoke-solutions-title'>
        One-in-all Solution for Businesses
      </p>
      <div className='bespoke-solutions-grid'>
        <div className='bespoke-solutions-grid-left'>
          <p className='bespoke-solutions-grid-left-sub-text'>
            We empower you with data via a web interface for managing plans and
            staff to drive better management decisions.
          </p>
          <div className='bespoke-solutions-grid-left-row'>
            {items.map((item) => (
              <div key={item} className='bespoke-solutions-grid-left-row-item'>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className='bespoke-solutions-grid-right'>
          <ul className='bespoke-solutions-grid-right-unordered'>
            <li className='bespoke-solutions-grid-right-unordered-item'>
              A host of innovative plans for every aspect of your business
            </li>
          </ul>
          <img
            src='/img/Mask1.webp'
            alt='mask banner'
            className='bespoke-solutions-grid-right-masked'
          />
        </div>
      </div>
    </section>
  );
};

export default BespokeSolutions;
