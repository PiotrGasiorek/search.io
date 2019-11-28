import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Notifications from './components/Notifications';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {receivedPhotos: {}};

    this.searchedPhotosHandler = this.searchedPhotosHandler.bind(this);
  }

  searchedPhotosHandler = (data) => {
    this.setState({
      receivedPhotos: data
    })
  }

  render() {
    return (
      <div className="App">
        <Header searchResoults={this.searchedPhotosHandler}/>
        <Main searchedPhotos={this.state.receivedPhotos}/>
        <Footer/>
        <Notifications/>
      </div> 
    );
  }
}

export default App;
