import React, { Component } from 'react';
import styles from './App.module.css';
import Background from './containers/Background/Background';
import Display from './containers/Display/Display';

class App extends Component {

  render() {
    return (
      <div className={styles.App}>
        <Background />
	        <Display refreshRate={1000/10}/>
        <Background />
      </div>
    );
  }
}

export default App;
