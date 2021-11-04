import React from 'react';
import './sass/main.scss';
import data from './data.json';
import Card from './Card.js';
import Controller from './Controller.js';
import { daily, weekly, monthly, formatTitle } from './common.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    let restructuredData = this.restructureData(data)

    this.state = {
      currentUnit: weekly,
      currentTimeframe: restructuredData.weekly,
      restructured: restructuredData,
    }

    this.handleTimeframeChange = this.handleTimeframeChange.bind(this)
  }

  restructureData = (data) => {
    let newData = {
      daily: {},
      weekly: {},
      monthly: {},
    }

    data.forEach(e => {
      [daily, weekly, monthly].forEach(t => {
        newData[t][formatTitle(e.title)] = e.timeframes[t]
      })
    })

    return newData
  }

  getTimeframes = (timeframe) => {
    return this.state.data.map(d => {
      d.timeframes2 = d.timeframes[timeframe.toLowerCase()]
      return d
    })
  }

  handleTimeframeChange = (unit) => {
    this.setState((state, props) => ({
      currentTimeframe: state.restructured[unit],
      currentUnit: unit,
    }))
  }

  render() {
    let cards = data.map(d => (
      <Card
        key={d.title}
        title={d.title}
        timeframe={this.state.currentTimeframe[formatTitle(d.title)]}
        currentUnit={this.state.currentUnit}
      />
    ))

    return (
      <div className="container">
        <h1 class="sr-only">Time Tracking Dashboard</h1>
        <Controller onClick={this.handleTimeframeChange} currentUnit={this.state.currentUnit} />
        <div className="cards">
          { cards }
        </div>
      </div>
    )
  }
}

export default App;