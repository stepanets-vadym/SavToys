import classNames from 'classnames';
import Icon from 'elemenst/icon/Icon';
import { FormikHandlers } from 'formik';
import { FC, useState } from 'react';
import styles from './Label.module.scss';

interface Props {
  text?: string;
  type?: string;
  value?: string | number;
  name?: string;
  placeholder?: string;
  /** Change event handler */
  onChange?: FormikHandlers['handleChange'];
  /** Blur event handler */
  onBlur?: FormikHandlers['handleBlur'];
  errorMessage?: string | number;
  description?: string;
  switchType?: boolean;
}

const Label: FC<Props> = ({
  text,
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  errorMessage,
  value,
  description,
  switchType,
}) => {
  const [changeType, setChangeType] = useState<boolean>(false);
  return (
    <label className={styles.label}>
      <span className={styles.labelTitle}>{text}</span>
      <input
        className={styles.input}
        value={value}
        type={changeType ? 'text' : type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
      />
      {switchType && (
        <span
          className={changeType ? classNames(styles.switchIcon, styles.activeIcon): styles.switchIcon}
          onClick={() => setChangeType(!changeType)}
        >
          <Icon name={'Eye_slosed'} />{' '}
        </span>
      )}
      <div className={styles.errorMessage}>{errorMessage}</div>
      {description ? (
        <div className={styles.description}>{description}</div>
      ) : null}
    </label>
  );
};

export default Label;
