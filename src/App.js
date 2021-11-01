import React from 'react';
import './sass/main.scss';
import data from './data.json';
import Card from './Card.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
    }
  }

  render() {
    let cards = data.map(d => (
      <Card key={d.title} title={d.title} timeframe={d.timeframes.daily}/>
    ))

    return (
      <div className="container">
        { cards }
      </div>
    )
  }
}

export default App;