import React from 'react';
import useSearch from '../../../hooks/useSearch';
import styles from './search.module.scss';

const Search = () => {
  const { search, handlerSearch } = useSearch();
  return (
    <>
      <div className={styles.search}>
        <label>
          <span className={styles.text}>
            Поиск
          </span>
          <input 
          type="text" 
          value={search}
          onChange={e => handlerSearch(e)}
          className={styles.input}
          />
        </label>
      </div>
    </>
  )
}

export default Search;