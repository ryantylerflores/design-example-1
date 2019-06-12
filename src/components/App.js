import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main'
import Navigation from './Navigation';
import '../sass/main.scss';

function App() {
  return ( 
    <React.Fragment>
      <Navigation />
      <Header
        logo={'img/logo-white.png'} 
        headingPrimary={'Outdoors'}
        headingSub={'is where life happens'}
      />
      <Main />
      <Footer 
        logo={'img/logo-green-2x.png'}
      />
    </React.Fragment>
  );
}

export default App;
