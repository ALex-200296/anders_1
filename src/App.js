import React from 'react';
import styles from './app.module.scss';

import Container from './components/container/Container';
import SectionBeers from './components/sectionBeers/SectionBeers';

function App() {

  return (
    <>
      <h1 className={styles.title}>
        Пиво
      </h1>
      <Container>
        <SectionBeers />
      </Container>
    </>
  )
}

export default App;
