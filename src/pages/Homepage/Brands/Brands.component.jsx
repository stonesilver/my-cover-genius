import './Brands.styles.scss';

const images = [
  '/img/brands/ajomoney.webp',
  '/img/brands/bitmama.webp',
  '/img/brands/bolt.webp',
  '/img/brands/chowdesk.webp',
  '/img/brands/earnipay.webp',
  '/img/brands/gigmile.webp',
  '/img/brands/healthtracker.webp',
  '/img/brands/jise.webp',
  '/img/brands/nellies.webp',
  '/img/brands/sunking.webp',
  '/img/brands/transtura.webp',
];

const Brands = () => {
  return (
    <div className='brands-covered'>
      <p className='brands-covered-title'>Brands covered by us:</p>

      <div className='brands-covered-brands-container'>
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`brand${index}`}
            className='brands-covered-brands-container-brand'
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
