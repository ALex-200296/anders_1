import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import useApi from '../../../hooks/useApi';
import styles from './pagination.module.scss';

const Pagination = () => {
  const {  
    handlerPageNext, 
    handlerPageLast,
    handlePerPage,
  } = useApi();
  const { page, perPage } = useSelector( state => state.details);

  return (
    <div className={styles.pagination}>
      <button 
      className={styles.button}
      onClick={handlerPageLast}
      disabled={page <= 1 ? true : false}
      >
        &lt; 	&lt; 	&lt;
      </button>
      <select onChange={handlePerPage} className={styles.select}>
        <option value="25" defaultValue>25</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
        <option value="60">60</option>
        <option value="70">70</option>
      </select>
      <button 
      className={styles.button}
      onClick={handlerPageNext}
      > 
        &gt; &gt; &gt;
      </button>
    </div>
  )
}

export default Pagination;