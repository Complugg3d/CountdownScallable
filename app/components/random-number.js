import React, { Component } from 'react';

class RandomNumber extends Component {
  constructor(props) {
    super(props);
  }

  flip() {
    return Math.random() >= 0.5;
  }

  generateRandom(num) {
    var timeStampInMs = window.performance && window.performance.now && window.performance.timing
      && window.performance.timing.navigationStart ? window.performance.now()
      + window.performance.timing.navigationStart
      + Math.abs(Math.sin(navigator.hardwareConcurrency)) : Date.now();

    let flipSeed = (this.flip())? 1 : 0;

    let generatedSeed = Math.abs(flipSeed - parseFloat('0.'
      + (timeStampInMs * Math.pow(10, parseInt(this.decimalPlaces(timeStampInMs))))));

    let max = Math.pow(2, 32);
    generatedSeed = generatedSeed * max;
    generatedSeed += (generatedSeed * generatedSeed) | 5;
    generatedSeed = (generatedSeed >>> 32) / max;
    return Math.floor(generatedSeed * num);
  }

  decimalPlaces(num) {
    var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    if (!match) { return 0; }
    return Math.max(
         0, (match[1] ? match[1].length : 0) - (match[2] ? + match[2] : 0));
  }

  render() {
    let rand = this.generateRandom(this.props.rand);
    return (
      <div className="random-number">
        <h3>Generated Random Number</h3>
        <div>
          {rand}
        </div>
      </div>
    );
  }
}

export default RandomNumber;
