import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './listBeers.module.scss';

import { fetchBeers } from '../../../store/action-creactors/beers';
import Loading from '../../../components/loading/Loading';
import ItemBeers from './itemBeers/ItemBeers';

const ListBeers = () => {
  const {beers, loading, error} = useSelector(state => state.beer);

  if(loading) {
    return (
      <div className={styles.loading}>
        <Loading />
      </div>
    )
  }

  if(error) {
    return (
      <h2>
        Ошибка попробуйте снова
      </h2>
    )
  }

  return (
    <ul className={styles.list}>
      {beers.map( data => 
        <ItemBeers data={data} key={data.id}/>
      )}
    </ul>
  )
}

export default ListBeers;