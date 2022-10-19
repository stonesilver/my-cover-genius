import './ClaimsAssessments.styles.scss';

const claims = [
  {
    title: 'Report Claim',
    desc: 'It all starts with a click. Log in to your account, from any device.',
  },
  {
    title: 'Take Picture',
  },
  {
    title: 'Estimate damage',
  },
  {
    title: 'Get Paid',
  },
];

const ClaimsAssessments = () => {
  return (
    <div className='claims-assessments'>
      <p className='claims-assessments-intro'>100% Claims Assessments</p>
      <p className='claims-assessments-title'>Make claims with ease</p>
      <p className='claims-assessments-sub-text'>
        Our digital self-inspection process lets your team report issues in
        real-time to keep your business running non-stop.
      </p>
      <div className='claims-assessments-grid'>
        <div className='claims-assessments-grid-left'>
          <div className='claims-assessments-grid-left-row'>
            {claims.map(({ title, desc }) => (
              <div key={title} className='claims-assessments-grid-left-row-item'>
                <p className='claims-assessments-grid-left-row-item-title'>
                  {title}
                </p>
                {desc && (
                  <p className='claims-assessments-grid-left-row-item-desc'>
                    {desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='claims-assessments-grid-right'>
          <img
            src='/img/IPhone-12.webp'
            alt='mask banner'
            className='claims-assessments-grid-right-masked'
          />
        </div>
      </div>
    </div>
  );
};

export default ClaimsAssessments;
