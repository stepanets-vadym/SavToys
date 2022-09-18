// React
import { FC } from 'react';
// Components & elements
import { SliderBannerImage } from '../../Types/SliderBannerImage.types';
import img1 from 'assets/img/1.png'
import img2 from 'assets/img/2.png'
import img3 from 'assets/img/3.png'

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './BannerSlider.module.scss';

// Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const BannerImage: SliderBannerImage[] = [
  {
    id: 1,
    src: img1
  },
]


const BannerSlider= ({}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      // slidesPerView={}
      navigation
      pagination={{ clickable: true }}
      loop={true}

    >
      {BannerImage && BannerImage.map((image) => (
        <SwiperSlide key={image.id} className={styles.slide}>
          {/* <div className={styles.bannerImage}> */}
            <img className={styles.asd} src={image.src} alt="Banner Image"/>
          {/* </div> */}
          </SwiperSlide>
      ))}
      

    </Swiper>
  );
};


export default BannerSlider;