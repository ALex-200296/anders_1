import React from 'react';
import styles from './loading.module.scss';

const Loading = () => {
  return (
    <>{/* React.Fragment тут лишний */}
    <div className={styles.lds_default}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </>
  )
}

export default Loading;
