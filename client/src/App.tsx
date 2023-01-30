import React from 'react';
import {Layout} from './components/Layout';
import {Header} from './components/Header';


function App() {
  return (
      <Layout>
          <Header />
          {/*<aside style={{gridArea: 'aside'}}>Aside</aside>*/}
          {/*<main  style={{gridArea: 'main'}}>Main</main>*/}
          {/*<footer style={{gridArea: 'footer'}}>Footer</footer>*/}
      </Layout>
  );
}

export default App;
