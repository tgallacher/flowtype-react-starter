// @flow
// Only files with '@flow' at the top will be analysed.
import React, { Component, type MouseEvent } from 'react'

export type CounterProps = {
  startAt?: number
}

export type CounterState = {
  currentValue: number
}

export default class Counter extends Component<CounterProps, CounterState> {
  state = {
    currentValue: this.props.startAt || 0
  }

  decrementClicked = (event: MouseEvent<HTMLButtonElement>) => {
    this.decrement()
  }

  incrementClicked = (event: MouseEvent<HTMLButtonElement>) => {
    this.increment()
  }

  decrement () {
    this.setState((prevState) => ({
      currentValue: prevState.currentValue - 1
    }))
  }

  increment () {
    this.setState((prevState) => ({
      currentValue: prevState.currentValue + 1
    }))
  }

  render () {
    return (
      <React.Fragment>
        <button onClick={this.decrementClicked}>-</button>
        {this.state.currentValue}
        <button onClick={this.incrementClicked}>+</button>
      </React.Fragment>
    )
  }
}
