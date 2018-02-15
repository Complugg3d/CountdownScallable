import React, { Component } from 'react';

const TimeBox = (props) => {
  var {time, label} = props;
  return (
    <div className="time-box">
      <span>{time}</span>
      <p>{label}</p>      
    </div>
  );
};

export default TimeBox;