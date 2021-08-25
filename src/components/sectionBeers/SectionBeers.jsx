import React from 'react';
// import styles from './sectionBeers.module.scss';

import Search from './search/Search';
import Pagination from './pagination/Pagination';
import ListBeers from './listBeers/ListBeers';
import Filter from './filter/FIlter';

const SectionBeers = () => {

  return (
    <section>
      <Filter />
      <Search />
      <ListBeers />
      <Pagination />
    </section>
  )
}

export default SectionBeers;