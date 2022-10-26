import './CoCreatingSolution.styles.scss';

const list = [
  '/img/coCreating/custodian.webp',
  '/img/coCreating/allianz.webp',
  '/img/coCreating/hygeia.webp',
  '/img/coCreating/aiico.webp',
  '/img/coCreating/stinsur.webp',
  '/img/coCreating/reliancehmo.webp',
  '/img/coCreating/leadway.webp',
  '/img/coCreating/axa.webp',
];

const CoCreatingSolution = () => {
  return (
    <section className='co-creating-solution'>
      <p className='co-creating-solution-title'>Co-creating solutions with:</p>
      <div className='co-creating-solution-view'>
        {list.map((img) => (
          <img
            key={img}
            src={img}
            alt='creating'
            className='co-creating-solution-view-img'
          />
        ))}
      </div>
    </section>
  );
};

export default CoCreatingSolution;
