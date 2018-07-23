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

  decrement () {
    this.setState((prevState, props) => {
      currentValue: prevState.currentValue - 1
    })
  }

  increment () {
    this.setState((prevState, props) => {
      currentValue: prevState.currentValue + 1
    })
  }

  render () {
    return <React.Fragment>
      <button>-</button>
      {this.state.currentValue}
      <button>+</button>
    </React.Fragment>
  }

}
