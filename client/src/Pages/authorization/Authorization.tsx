// React
import { Link, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import axios from 'axios';

// Formik
import { Formik, FormikHelpers as FormikActions } from 'formik';

// Redux
import { useAppDispatch } from 'hooks/redux';

// Components & elements
import Label from 'elemenst/label/Label';
import { baseURL } from 'http/Http';
import { REGISTRATION_ROUTE } from 'utils/consts';

// Styles
import styles from './Authorization.module.scss';
import { getUser } from 'store/reducers/GetUser';

interface FormValues {
  email: string;
  password: string;
}

interface FormErrors {
  email?: string;
  password?: string;
}

const Erorrs = {
  REQIRED: "це поле обов'язкове",
};

const Authorization = () => {
  let navigate = useNavigate();
  const dispatch = useAppDispatch();
  // Start Value Inputs
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  // Validate Form
  const validate = (values: FormValues) => {
    const errors: FormErrors = {};
    // Password Validate
    if (!values.password) {
      errors.password = Erorrs.REQIRED;
    } else if (values.password.length <= 5) {
      errors.password = 'Пароль занадто короткий';
    }
    // Email Validate
    if (!values.email) {
      errors.email = Erorrs.REQIRED;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Невірний формат адреси';
    }

    return errors;
  };

  const submit = async (
    values: FormValues,
    { setSubmitting, resetForm }: FormikActions<FormValues>
  ) => {
    const apiUrl = `${baseURL}/user/login`;

    const headers: any = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('mode', 'cors');
    await axios
      .post(apiUrl, values, {
        headers,
      })
      .then((res) => {
        resetForm();
        console.log(res);
        dispatch(getUser.actions.getUser(res.data.user));
        localStorage.setItem('user', JSON.stringify(res.data.user));
        localStorage.setItem('token', res.data.token);
        navigate('/');
      })
      .catch((errors) => {
        setSubmitting(false);
        resetForm();
        console.log(errors);
      });
  };

  return (
    // Authorization
    <div className={styles.Authorization}>
      <div className={classNames(styles.wrapper)}>
        {/* Logo Block */}
        <div className={styles.logoblock}>Вхід</div>
        {/* Form Block */}
        <Formik
          initialValues={initialValues}
          validate={validate}
          onSubmit={submit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            /* and other goodies */
          }) => (
            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.formInputBlock}>
                <Label
                  value={values.email}
                  text={'Електронна адреса'}
                  name={'email'}
                  type={'email'}
                  placeholder={'Приклад: some-name@gmail.com'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={
                    errors.email && touched.email ? errors.email : ''
                  }
                />

                <Label
                  value={values.password}
                  text={'Пароль'}
                  name={'password'}
                  type={'password'}
                  switchType={true}
                  placeholder={'Він має бути надійним'}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  errorMessage={
                    errors.password && touched.password ? errors.password : ''
                  }
                />

                <button
                  type='submit'
                  className={styles.formBtn}
                  disabled={isSubmitting}
                >
                  Вхід
                </button>
              </div>
            </form>
          )}
        </Formik>
        <Link to={REGISTRATION_ROUTE} className={styles.link}>
          Ще не маєте акаунт ?
        </Link>
      </div>
    </div>
  );
};

export default Authorization;
