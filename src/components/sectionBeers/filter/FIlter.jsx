import React, { useRef } from 'react';
import styles from './filter.module.scss';

import { useFilter } from '../../../hooks/useFilter';

const groupInput = [
  { id: '1', type: 'number', name: 'abv_gt', symbol: '>' },
  { id: '2', type: 'number', name: 'abv_lt', symbol: '<' },
  { id: '3', type: 'number', name: 'ibu_gt', symbol: '>' },
  { id: '4', type: 'number', name: 'ibu_lt', symbol: '<' },
  { id: '5', type: 'number', name: 'ebc_gt', symbol: '>' },
  { id: '6', type: 'number', name: 'ebc_lt', symbol: '<' },
  { id: '7', type: 'string', name: 'yeast' },
  { id: '8', type: 'date', name: 'brewed_before' },
  { id: '9', type: 'date', name: 'brewed_after' },
  { id: '10', type: 'string', name: 'hops' },
  { id: '11', type: 'string', name: 'malt' },
  { id: '12', type: 'string', name: 'food' },
  { id: '13', type: 'string', name: 'ids' },
]

const Filter = () => {
  const formRef = useRef(null);
  const { handlerInput, handlerSubmit } = useFilter(formRef);

return (
  <div className={styles.filter}>
    <form ref={formRef} className={styles.form} onSubmit={ e=> handlerSubmit(e)}>
      <h2 className={styles.title}>
        Фильтр
      </h2>
      <div className={styles.inputGroup}>
        {groupInput.map( props => (
          <React.Fragment key={props.id}>
            <div className={styles.wrap}>
              <label htmlFor={props.name} className={styles.label}>
                <span className={styles.span}>
                  {props.name} {!!props.symbol && props.symbol}
                </span>
              </label>
            <input id={props.name} className={styles.input} onChange={e=> handlerInput(e)} type={props.type} name={props.name}/>
            </div>
          </React.Fragment>
        ))}
      </div>
      <button className={styles.btn}>
        Получить
      </button>
    </form>
  </div>
)
}

export default Filter;