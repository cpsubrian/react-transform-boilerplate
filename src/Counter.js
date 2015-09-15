import React, { Component } from 'react';

export class Counter extends Component {
  render() {
    return (
      <h1 style={{ color: this.props.color }}>
        Counter ({this.props.factor}): {this.props.counter * this.props.factor}
      </h1>
    );
  }
}
