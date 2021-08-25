import React from 'react';
import styles from './itemImg.module.scss';

const ItemImg = ({ img }) => {

  return (
    <img 
    src={img} 
    alt={img} 
    className={styles.img}
    />
  )
}

export default ItemImg;