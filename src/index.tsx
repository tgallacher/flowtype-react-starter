import React from 'react'
import ReactDOM from 'react-dom'

import HelloWorld from './components/hello_world'

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<HelloWorld name="Leslie"/>, document.querySelector('#the-app'))
})
