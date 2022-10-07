// React
import classNames from 'classnames';
import { useState } from 'react';
import axios from 'axios';

// Components & Elements
import { baseURL } from 'http/Http';

// Styles
import styles from './CreateBrand.module.scss';

const CreateBrand = () => {
  const [value, setValue] = useState<string>('');
  const [image, setImage] = useState<null | FileList>(null);

  const [openCreateWindow, setOpenCreateWindow] = useState<boolean>(false);

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
   

    const formData = new FormData();
    formData.append('name', value);
    formData.append('img', image?.[0] ? image?.[0] : '');

    const apiUrl = `${baseURL}/brand`;

    await axios
      .post(apiUrl, formData)
      .then((res) => {
        setValue('');
        setOpenCreateWindow(false);
        console.log(res);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div className={styles.CreateBrand}>
      <button
        className={styles.openBtn}
        onClick={() => setOpenCreateWindow(true)}
      >
        Додати бренд
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
            <span className={styles.name}>Назва бренду</span>
            <input
              type={'text'}
              className={styles.input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
          <label className={styles.fileBlock}>
            <span className={styles.name}>Оберіть картинку</span>
            <input
              type={'file'}
              className={styles.fileInput}
              onChange={(e) => setImage(e.target.files)}
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

export default CreateBrand;
