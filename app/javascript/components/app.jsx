import React from 'react';
import Nav from './nav';
import Banner  from './banner';

class App extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        <Banner />
      </div>
    )
  }
}

export default App;