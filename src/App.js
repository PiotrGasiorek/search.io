import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Footer>
        <p>Created by <a href="https://piotrgasiorek.github.io/developer/">Piotr Gąsiorek</a></p>
      </Footer>
    </div>  
  );
}

export default App;
