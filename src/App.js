import React, { Component } from 'react';
import './App.css';
import Store from './store/Store'
class App extends Component {




  render() {
    return (

      <div className="App">
        <Store
          // movies={this.state.movies}
          // onAddMovie={this.addMovie}
          handleSearch={this.handleSearch}
        />
      </div>

    );
  }
}

export default App;
