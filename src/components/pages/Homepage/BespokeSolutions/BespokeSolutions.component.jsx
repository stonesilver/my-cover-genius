import './BespokeSolutions.styles.scss';

const items = ['Plans', 'Claim', 'Beneficiaries', 'Wallet'];

export const BespokeSolutions = () => {
  return (
    <div className='bespoke-solutions'>
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
        <div className='bespoke-solutions-grid-right'></div>
      </div>
    </div>
  );
};
