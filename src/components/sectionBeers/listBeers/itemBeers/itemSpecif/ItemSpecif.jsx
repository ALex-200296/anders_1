import React from 'react';
import styles from './itemSpecif.module.scss';

const ItemSpecif = ({ data }) => {

return (
  <div className={styles.specif}>
    <h3 className={styles.title}>
      Характеристики
    </h3>
    <ul className={styles.list}>
      <li styles={styles.item}>
        <span>
          <b>name:</b> {data.name}
        </span>
      </li>
      <li styles={styles.item}>
        <span>
          <b>tagline:</b> {data.tagline}
        </span>
      </li>
      <li styles={styles.item}>
        <span>
          <b>contributed_by:</b> {data.contributed_by}
        </span>
      </li>
      <li styles={styles.item}>
        <span>
          <b>description:</b> {data.description}
        </span>
      </li>
      <li styles={styles.item}>
        <span>
          <b>brewers tips:</b> {data.brewers_tips}
        </span>
      </li>
      <li styles={styles.item}>
        <span>
          <b>Alcohol By Volume:</b> {data.abv}
        </span>
      </li>
      <li styles={styles.item}>
        <span>
          <b>attenuation_level:</b> {data.attenuation_level}
        </span>
      </li>
      <li styles={styles.item}>
        <span>
          <b>food_pairing:</b>
          {data.food_pairing.map(val => `${val}. `)}

        </span>
      </li>
      <li styles={styles.item}>
        <span>
          <b>ebc:</b> {data.ebc}
        </span>
      </li>
      <li styles={styles.item}>
        <span>
          <b>ibu:</b> {data.ibu}
        </span>
      </li>
    </ul>
  </div>
)
}

export default ItemSpecif;