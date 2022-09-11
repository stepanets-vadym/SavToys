// React
import classNames from 'classnames';
// Components & elements
import Icon from '../../elemenst/icon/Icon';
import BannerSlider from './BannerSlider';
import img2 from 'assets/img/2.png'
import img3 from 'assets/img/3.png'
// Context

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './Banner.module.scss';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={classNames(styles.wrapper, globalStyle.container)}>
        <div className={styles.sliderBlock}>
          <BannerSlider/>
        </div>
        <div className={styles.infoImage}>
          <div className={styles.infoImageItem}>
            <img src={img2} alt="InfoImage"/>
          </div>
          <div className={styles.infoImageItem}>
            <img src={img3} alt="InfoImage"/>
          </div>
        </div>
      </div>
    </div>
  );
}
