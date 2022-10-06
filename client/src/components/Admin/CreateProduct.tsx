// React
import classNames from 'classnames';
import { useState } from 'react';
import axios from 'axios';

// Components & Elements
import CustomSelect from 'elemenst/select/Select';
import { baseURL } from 'http/Http';

// Redux
import { useAppSelector } from 'hooks/redux';

// Tyes
import { IType } from 'Types/ProductTypes.types';
import { IBrand } from 'Types/Brand.types';

// Styles
import styles from './CreateProduct.module.scss';

const CreateProduct = () => {
  const [value, setValue] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [brand, setBrand] = useState<IBrand | null>(null);
  const [type, setType] = useState<IType | null>(null);
  const [image, setImage] = useState<null | FileList>(null);
  const [newProd, setNewProd] = useState<boolean>(false);
  const [bestseller, setBestseller] = useState<boolean>(false);
  const [discount, setDiscount] = useState<string>('');

  const { brands } = useAppSelector((state) => state.brandReducer);
  const { types } = useAppSelector((state) => state.typeReduser);

  const [openCreateWindow, setOpenCreateWindow] = useState<boolean>(false);

  const submit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(value);
    console.log(image?.[0]);

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
    <div className={styles.CreateProduct}>
      <button
        className={styles.openBtn}
        onClick={() => setOpenCreateWindow(true)}
      >
        Створити продукт
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
            <span className={styles.name}>Назва товару</span>
            <input
              type={'text'}
              className={styles.input}
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </label>
          <label className={styles.nameBlock}>
            <span className={styles.name}>Ціна товару</span>
            <input
              type={'text'}
              className={styles.input}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </label>
          <div>
            <CustomSelect
              defaultVal='Бренд'
              options={brands}
              onChange={setBrand}
            />
          </div>
          <div>
            <CustomSelect defaultVal='Tип' options={types} onChange={setType} />
          </div>

          <label className={styles.fileBlock}>
            <span className={styles.name}>Оберіть картинку</span>
            <input
              type={'file'}
              className={styles.fileInput}
              onChange={(e) => setImage(e.target.files)}
            />
          </label>
          <label className={styles.fileBlock}>
            <span className={styles.name}>Новий товар</span>
            <input
              type={'checkbox'}
              className={styles.fileInput}
              onChange={() => setNewProd(!newProd)}
            />
          </label>
          <label className={styles.fileBlock}>
            <span className={styles.name}>Хіт продаж</span>
            <input
              type={'checkbox'}
              className={styles.fileInput}
              onChange={() => setBestseller(!bestseller)}
            />
          </label>
          <label className={styles.nameBlock}>
            <span className={styles.name}>Дисконт від 1 - 100</span>
            <input
              type={'text'}
              className={styles.input}
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
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

export default CreateProduct;
