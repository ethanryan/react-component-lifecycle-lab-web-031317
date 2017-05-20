import React from 'react';
import Tweet from './Tweet';

export default class TweetWall extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tweets: []
    };
  }

  // TODO: componentWillMount()
  componentWillMount(prevProps, prevState) {
    this.setState({
      tweets: this.props.newTweets,
    })
  }

  // TODO: shouldComponentUpdate()
  shouldComponentUpdate(nextProps, nextState) {
    console.log('here are nextProps.newTweets.length: ', nextProps.newTweets.length);
      return (nextProps.newTweets.length > 0)
  }


  // TODO: componentWillReceiveProps()
  componentWillReceiveProps(nextProps) {
    this.setState({
      tweets: [...nextProps.newTweets, ...this.state.tweets]
    })
  }

  render() {
    const tweets = this.state.tweets.map((tweet, index) => {
      return <Tweet text={tweet.text} key={index} />
    });
    return (
      <div>{tweets}</div>
    );
  }
}
