import React, { Component } from 'react'

export interface CounterProps {
  startAt?: number
}

export interface CounterState {
  currentValue: number
}

export default class Counter extends Component<CounterProps, CounterState> {

  constructor (props: CounterProps) {
    super(props)
    this.state = {
      currentValue: this.props.startAt || 0
    }
  }

  decrementClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
    this.decrement()
  }

  incrementClicked = (event: React.MouseEvent<HTMLButtonElement>) => {
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
    return <React.Fragment>
      <button onClick={this.decrementClicked}>-</button>
      {this.state.currentValue}
      <button onClick={this.incrementClicked}>+</button>
    </React.Fragment>
  }

}
