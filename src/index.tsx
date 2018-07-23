import React from 'react'
import ReactDOM from 'react-dom'

import Counter from './components/counter'

document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(<Counter startAt={42}/>, document.querySelector('#the-app'))
})
