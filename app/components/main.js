import React, { Component } from 'react';

import TimeBox from 'time-box';
import RandomNumber from 'random-number';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 170867
    };
  }
  componentDidMount(prevProps, prevState) {
    this.startTimer();
  }
  startTimer() {
    this.timer = setInterval(() => {
      var newCount = this.state.count - 1;
      this.setState({
        count: (newCount >= 0)? newCount: 0
      });
    }, 1000);
  }
  render() {
    let seconds = this.state.count % 60;

    let minutes = Math.floor((this.state.count / 60) % 60);
    let hours = Math.floor(((this.state.count / 60) / 60) % 24);
    let days = Math.floor((((this.state.count / 60) / 60) / 24) % 24);

    if(seconds < 10) {
      seconds = '0' + seconds;
    }

    if(minutes < 10) {
      minutes = '0' + minutes;
    }

    if(hours < 10) {
      hours = '0' + hours;
    }

    return (
      <div>
        <div className="main">
          <TimeBox time={days} label="Days"/>
          <TimeBox time={hours} label="Hours"/>
          <TimeBox time={minutes} label="Minutes"/>
          <TimeBox time={seconds} label="Seconds"/>
        </div>
        <RandomNumber rand="400"/>
      </div>
    );
  }
}

export default Main;
