// React
import classNames from 'classnames';
import { useState } from 'react';
import axios from 'axios';

// Components & Elements
import { baseURL } from 'http/Http';

// Styles
import styles from './CreateType.module.scss';

const CreateType = () => {
  const [value, setValue] = useState<string>('');
  const [iconName, setIconName] = useState<string>('');
  const [menuIconName, setMenuIconName] = useState<string>('');

  const [openCreateWindow, setOpenCreateWindow] = useState<boolean>(false);

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
  

    const formData = new FormData();
    formData.append('name', value);
    formData.append('icon', iconName);
    formData.append('menuIcon', menuIconName);

    console.log(formData);
    
    const token = localStorage.getItem('token');

    const apiUrl = `${baseURL}/type`;

    await axios
      .post(apiUrl, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setValue('');
        setIconName('');
        setMenuIconName('');
        setOpenCreateWindow(false);
        console.log(res);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div className={styles.CreateType}>
      <button
        className={styles.openBtn}
        onClick={() => setOpenCreateWindow(true)}
      >
        Додати тип
      </button>

      <div
        className={
          openCreateWindow
            ? classNames(styles.createWindow, styles.active)
            : styles.createWindow
        }
        onClick={() => setOpenCreateWindow(false)}
      >
        <form
          className={styles.content}
          onClick={(e) => e.stopPropagation()}
          onSubmit={submit}
        >
          <label className={styles.nameBlock}>
            <span className={styles.name}>Назва типу</span>
            <input
              type={'text'}
              className={styles.input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
          <label className={styles.nameBlock}>
            <span className={styles.name}>Назва іконки типу</span>
            <input
              type={'text'}
              className={styles.input}
              value={iconName}
              onChange={(e) => setIconName(e.target.value)}
            />
          </label>
          <label className={styles.nameBlock}>
            <span className={styles.name}>Назва іконки типу для меню</span>
            <input
              type={'text'}
              className={styles.input}
              value={menuIconName}
              onChange={(e) => setMenuIconName(e.target.value)}
            />
          </label>

          <button className={styles.submitBtn} type={'submit'}>
            Створити
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateType;
