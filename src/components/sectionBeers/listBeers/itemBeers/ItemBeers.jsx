import React from 'react';
import styles from './itemBeers.module.scss';

import ItemImg from './itemImg/ItemImg';
import ItemSpecif from './itemSpecif/ItemSpecif';

const ItemBeers = ({ data }) => {
  
  return (
    <li className={styles.item}> 
      <ItemImg img={data.image_url}/>
      <ItemSpecif data={data} />
    </li>
  )
}

export default ItemBeers;
