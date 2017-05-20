import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';
import { initialize, update } from '../lib/chart';

require('fbjs/lib/ExecutionEnvironment').canUseDOM = true //adding this, for componentWillUnmount

console.log("hello from App.js");

export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      latestTweets: []
    };
    initialize();
    this.updateChart = this.updateChart.bind(this);
    this.fetchTweets = this.fetchTweets.bind(this);
  }

  // TODO: componentWillMount()
  componentWillMount() {
    this.fetchTweets()
  }

  // TODO: componentDidMount()
  componentDidMount() {
    this.startInterval()
  }

  // TODO: componentWillUnmount()
  //needed to add 'require' on line 7 above to get componentWillUnmount to pass
  componentWillUnmount() {
    this.cleanUpInterval()
  }

  // TODO: componentDidUpdate()
  componentDidUpdate(prevProps, prevState) {
    //console.log('prevProps: ', prevProps);
    console.log('prevState.length: ', prevState.length);
    console.log('here is this.state.latestTweets.length: ', this.state.latestTweets.length);
    this.updateChart(this.state.latestTweets.length) //sweet
  }

  updateChart(numTweets) {
    update(numTweets);
  }

  startInterval() {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval() {
    clearInterval(this.interval);
  }

  fetchTweets() {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div><TweetWall newTweets={this.state.latestTweets} /></div>
    )
  }
}
