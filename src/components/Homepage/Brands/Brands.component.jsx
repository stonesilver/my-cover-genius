import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Brands.styles.scss';

const images = [
  '/img/brands/ajomoney.webp',
  '/img/brands/bitmama.webp',
  '/img/brands/bolt.webp',
  '/img/brands/chowdeck.webp',
  '/img/brands/earnipay.webp',
  '/img/brands/gigmile.webp',
  '/img/brands/healthtracker.webp',
  '/img/brands/jise.webp',
  '/img/brands/NelliesNigeria.webp',
  '/img/brands/sunking.webp',
  '/img/brands/transtura.webp',
];

const Brands = () => {
  return (
    <div className='brands-covered'>
      <p className='brands-covered-title'>Brands covered by us:</p>

      <div className='brands-covered-brands-container'>
        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            769: {
              slidesPerView: 5,
            },
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`brand${index}`}
                className='brands-covered-brands-container-brand'
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Brands;
