import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBeersFilter } from '../../../store/action-creactors/beers';
import { BEERS_FILTER } from '../../../store/types/beers';
import styles from './filter.module.scss';


const Filter = () => {
const [data, setData] = useState({});
const { search } = useSelector( state => state.details);
const dispath = useDispatch();
const formRef = useRef(null);

useEffect(() => {
  formRef.current.reset();
}, [search])

const handlerInput = (e) => {
  setData({
    ...data,
    [e.target.name]: e.target.value
  })
}

const handlerSubmit = (e) => {
  e.preventDefault();
  console.log(e)
  const filterData = data;

  clean(filterData);

  if(Object.keys(filterData).length !== 0) {
    dispath({type: BEERS_FILTER, filter: filterData});
    dispath(fetchBeersFilter(filterData, 1, 25));
  }

  formRef.current.reset();
  setData({});
}

function clean(obj) {
  for (let propName in obj) { 
    if (obj[propName] === null || obj[propName] === undefined || obj[propName] === '') {
      delete obj[propName];
    }
  }
}

return (
<div className={styles.filter}>
  <form ref={formRef} className={styles.form} onSubmit={ e=> handlerSubmit(e)}>
    <h2 className={styles.title}>
      Фильтр
    </h2>
    <div className={styles.inputGroup}>
      <label htmlFor="abv_gt" className={styles.label}>
        <span className={styles}>Крепость &gt;</span>
      </label>
      <input id="abv_gt" className={styles.input} onChange={e=> handlerInput(e)} type="number" name="abv_gt"/>
      <label htmlFor="abv_lt" className={styles.label}>
        <span className={styles}>Крепость &lt;</span>
      </label>
      <input id="abv_lt" className={styles.input} onChange={e=> handlerInput(e)} type="number" name="abv_lt"/>
      <label htmlFor="mom_gt" className={styles.label}>
        <span className={styles}>IBU &gt;</span>
      </label>
      <input id="mom_gt" className={styles.input} onChange={e=> handlerInput(e)} type="number" name="mom_gt"/>
      <label htmlFor="ibu_lt" className={styles.label}>
        <span className={styles}>IBU &lt;</span>
      </label>
      <input id="ibu_lt" className={styles.input} onChange={e=> handlerInput(e)} type="number" name="ibu_lt"/>
      <label htmlFor="ebc_gt" className={styles.label}>
        <span className={styles}>EBC &gt;</span>
      </label>
      <input id="ebc_gt" className={styles.input} onChange={e=> handlerInput(e)} type="number" name="ebc_gt "/>
      <label htmlFor="ebc_lt" className={styles.label}>
        <span className={styles}>EBC &lt;</span>
      </label>
      <input id="ebc_lt" className={styles.input} onChange={e=> handlerInput(e)} type="number" name="ebc_lt"/>
      <label htmlFor="yeast" className={styles.label}>
        <span className={styles}>Yeast</span>
      </label>
      <input id="yeast" className={styles.input} onChange={e=> handlerInput(e)} type="string" name="yeast"/>
      <label htmlFor="brewed_before" className={styles.label}>
        <span className={styles}>Brewed before</span>
      </label>
      <input id="brewed_before" className={styles.input} onChange={e=> handlerInput(e)} type="date" name="brewed_before"/>
      <label htmlFor="brewed_after" className={styles.label}>
        <span className={styles}>Brewed after</span>
      </label>
      <input id="brewed_after" className={styles.input} onChange={e=> handlerInput(e)} type="date" name="brewed_after"/>
      <label htmlFor="hops" className={styles.label}>
        <span className={styles}>Hops</span>
      </label>
      <input id="hops" className={styles.input} onChange={e=> handlerInput(e)} type="string" name="hops"/>
      <label htmlFor="malt" className={styles.label}>
        <span className={styles}>Malt</span>
      </label>
      <input id="malt" className={styles.input} onChange={e=> handlerInput(e)} type="string" name="malt"/>
      <label htmlFor="food" className={styles.label}>
        <span className={styles}>Food</span>
      </label>
      <input id="food" className={styles.input} onChange={e=> handlerInput(e)} type="string" name="food"/>
      <label htmlFor="ids" className={styles.label}>
        <span className={styles}>ID</span>
      </label>
      <input id="ids" className={styles.input} onChange={e=> handlerInput(e)} type="string" name="ids"/>
    </div>
    <button className={styles.btn}>
      Получить
    </button>
  </form>
</div>
)
}

export default Filter;