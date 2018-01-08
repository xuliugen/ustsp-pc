// @flow
import 'normalize.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as store from 'src/store'
import registerServiceWorker from './registerServiceWorker'

import App from './App'

// Strict mode enforces that all state modifications are done by an action.
useStrict(true)

const root = document.getElementById('root')
if (root) {
  ReactDOM.render((
    <Provider {...store}>
      <Router>
        <App />
      </Router>
    </Provider>
  ), root)
}

registerServiceWorker()
