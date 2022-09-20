import classNames, { Value } from 'classnames';
import { FC, useState } from 'react';
import ReactSlider from 'react-slider';

// Styles
import globalStyle from '../../styles/global/global.module.scss';
import styles from './PriceFilter.module.scss';

interface Props {
  max: number,
  min: number,
  setMin: (value: number) => void
  setMax: (value: number) => void
}

const PriceFilter: FC<Props> = ({max, min, setMin, setMax}) => {
  


  return (
    <div className={styles.PriceFilter}>
      <div className={styles.priceBlock}>
        <input type='text' className={styles.valueBox} value={min} disabled={true} />
        <span className={styles.line}></span>
        <input type='text' className={styles.valueBox} value={max} disabled={true} />
      </div>

      <ReactSlider
        className={styles.slider}
        trackClassName={styles.track}
        defaultValue={[min, max]}
        min={0}
        max={20000}
        renderThumb={(props) => <div {...props} className={styles.thumb}></div>}
        renderTrack={(props) => <div {...props} className={styles.track}></div>}
        pearling={true}
        minDistance={50}
        step={10}
        onChange={([min, max]) => (setMin(min), setMax(max))}
      />
    </div>
  );
};

export default PriceFilter;
