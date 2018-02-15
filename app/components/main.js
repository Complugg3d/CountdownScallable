import React, { Component } from 'react';

import TimeBox from 'time-box';

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {     
    return ( 
      <div className="main">
        <TimeBox time="5" label="Days"/>   
        <TimeBox time="23" label="Hours"/>   
        <TimeBox time="30" label="Minutes"/>   
        <TimeBox time="50" label="Seconds"/>   
      </div>    
    );
  }
}

export default Main;