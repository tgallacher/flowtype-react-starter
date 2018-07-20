import React, { PureComponent } from 'react'

export interface HelloWorldProps {
  name?: string
}

export default class HelloWorld extends PureComponent<HelloWorldProps, {}> {
  render () {
    return <div>Hello, {this.props.name || 'World'}!</div>
  }
}
