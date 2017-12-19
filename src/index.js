// @flow
import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import * as store from 'src/store'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker'
import 'normalize.css'

// Strict mode enforces that all state modifications are done by an action.
useStrict(true)

ReactDOM.render((
  <Provider {...store}>
    <Router>
      <App />
    </Router>
  </Provider>
), document.getElementById('root'))

registerServiceWorker()
