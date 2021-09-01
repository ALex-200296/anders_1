import React from 'react';
import useSearch from '../../../hooks/useSearch';
import styles from './search.module.scss';

const Search = () => {
  const { search, handlerSearch } = useSearch();
  return (
    <> {/* Фрагмент тут лишний */}
      <div className={styles.search}>
        <label>
          <span className={styles.text}>
            Поиск
          </span>
          <input 
          type="text" 
          value={search}
          onChange={e => handlerSearch(e)} // можно просто onChange={handlerSearch}
          className={styles.input}
          />
        </label>
      </div>
    </>
  )
}

export default Search;
