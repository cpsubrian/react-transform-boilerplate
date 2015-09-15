import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment, reset } from './actions';
import { Counter } from './Counter';
import { NICE, SUPER_NICE } from './colors';

@connect((state) => state, {increment, reset})
export class App extends Component {

  componentWillMount() {
    this.interval = setInterval(() => this.props.increment(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <Counter counter={this.props.counter} factor={1} color={NICE} />
        <Counter counter={this.props.counter} factor={5} color={SUPER_NICE} />
        <button onClick={(e) => this.props.reset({value: 0})}>Reset</button>
      </div>
    );
  }
}