import React from 'react';
import './sass/main.scss';
import data from './data.json';
import Card from './Card.js';
import Controller from './Controller.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: data,
    }
  }

  render() {
    let cards = data.map(d => (
      <Card key={d.title} title={d.title} timeframe={d.timeframes.weekly}/>
    ))

    return (
      <div className="container">
        <Controller/>
        { cards }
      </div>
    )
  }
}

export default App;