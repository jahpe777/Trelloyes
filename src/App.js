import React, {Component} from 'react';
import './app.css';
import List from './list.js';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {}.
    }
  }
}

function App() {
  render () {
    const {store} = this.props;
  }
  return (
    <main class="App">
      <header class="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div class="App-list">
      </div>
    </main>
  );
}

export default App;
