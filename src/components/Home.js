import React from 'react';
import { useSelector } from 'react-redux';
import TransitionSnackbar from '../components/animation/TransitionSnackbar';
import Filters from './Filters';
import Results from './Results';
import Search from './Search';

function Home() {
  const isFetching = useSelector(state => state.results.isFetching);

  return (
    <>
      <Search />
      <Filters />
      <Results />

      <TransitionSnackbar show={isFetching}>
        Fetching more results...
      </TransitionSnackbar>
    </>
  );
}

export default Home;