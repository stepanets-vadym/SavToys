// React
import { FC } from 'react';
// Components & elements
import { SliderBannerImage } from '../../Types/SliderBannerImage.types';
import img1 from 'assets/img/Rectangle 26.png'
import img2 from 'assets/img/Rectangle 27.png'
import img3 from 'assets/img/Rectangle 28.png'
import img4 from 'assets/img/Rectangle 29.png'

// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './ImagesBlock.module.scss';

// Swiper
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import classNames from 'classnames';

const BannerImage: SliderBannerImage[] = [
  {
    id: 1,
    src: img1
  },
  {
    id: 2,
    src: img2
  },
  {
    id: 3,
    src: img3
  },
  {
    id: 4,
    src: img4
  }
]


const ImagesBlock= ({}) => {
  return (
   <div className={styles.ImagesBlock}>
     <div className={classNames(styles.wrapper, globalStyle.container)}>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          slidesPerView={4}
          navigation
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
     </div>
   </div>
  );
};


export default ImagesBlock;