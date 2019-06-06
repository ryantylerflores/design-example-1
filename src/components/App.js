import React from 'react';

import Header from './Header';
import Main from './Main'
import '../sass/main.scss';

function App() {
  return ( 
    <React.Fragment>
      <Header
        logo={'img/logo-white.png'} 
        headingPrimary={'Outdoors'}
        headingSub={'is where life happens'}
      />
      <Main />
      
    </React.Fragment>
  );
}

export default App;
