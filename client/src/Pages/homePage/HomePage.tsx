// React
import classNames from 'classnames';
import { FC, useEffect } from 'react';

// Components & elements
import Banner from 'components/Banner/Banner';
import Benefits from 'components/Benefits/Benefits';
import TypesBlock from 'components/TypesBlock/TypesBlock';
import ImagesBlock from 'components/ImagesBlock/ImagesBlock';

// Redux
import { useAppDispatch } from 'hooks/redux';
import {
  fetchProductTypes,
  getCheckedUser,
} from 'store/reducers/ActionsCreator';

// Style
import globalStyle from '../../styles/global/global.module.scss';
import styles from './HomePage.module.scss';

export default function HomePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchProductTypes());
    if (localStorage.getItem('token')) {
      dispatch(getCheckedUser());
    }
  }, []);

  return (
    <div>
      <Banner />
      <ImagesBlock />
      <Benefits />
      <TypesBlock />
    </div>
  );
}
