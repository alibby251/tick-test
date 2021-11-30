import React from 'react';
import { Provider } from 'react-redux';
import { Link, Route, Routes } from 'react-router-dom';
import Home from '../src/components/Home';
import Media from '../src/components/Media';
import store from '../src/redux/store';
import Page from '../src/styles/Page';

function App() {
  return (
    <Provider store={store}>
      <Page>
        <Link to="/">
          <h1>NASA API Demo</h1>
        </Link>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/asset/:id" element={<Media />} />
        </Routes>
      </Page>
    </Provider>
  );
}

export default App;
