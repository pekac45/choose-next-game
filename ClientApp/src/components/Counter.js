import React, { Component } from 'react';

export class Counter extends Component {
  static displayName = Counter.name;

  constructor(props) {
    super(props);
    this.state = { currentCount: 0 };
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  incrementCounter() {
    this.setState({
      currentCount: this.state.currentCount + 1
    });
  }

  decrementCounter() {
    this.setState({
      currentCount: this.state.currentCount - 1
    });
  }

  resetCounter() {
    this.setState({
      currentCount: 0
    });
  }

  render() {
    const buttonStyle = {
      margin: '10px'
    };
    return (
      <div>
        <h1>Counter</h1>

        <p>This is a simple example of a React component.</p>

        <p>
          Current count: <strong>{this.state.currentCount}</strong>
        </p>

        <button className="btn btn-primary" onClick={this.incrementCounter} style={buttonStyle}>
          Increment
        </button>
        <button className="btn btn-secondary" onClick={this.decrementCounter} style={buttonStyle}>
          Decrement
        </button>
        <button className="btn btn-danger" onClick={this.resetCounter} style={buttonStyle}>
          Reset
        </button>
      </div>
    );
  }
}
