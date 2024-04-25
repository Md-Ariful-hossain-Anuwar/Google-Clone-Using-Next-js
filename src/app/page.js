import HomeBody from '@/components/HomeBody';
import SearchBar from '@/components/SearchBar';
import React, { Fragment } from 'react';

const page = () => {
  return (
    <Fragment>
      <HomeBody></HomeBody>
      <SearchBar></SearchBar>
    </Fragment>
  );
};

export default page;