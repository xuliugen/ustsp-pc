// @flow
// import 'normalize.css'
import './app.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { useStrict } from 'mobx'
import { Provider } from 'mobx-react'
import { BrowserRouter as Router } from 'react-router-dom'
import * as store from 'src/store'
import registerServiceWorker from './registerServiceWorker'

import App from './App'

// 设置为中文日期
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('zh-cn')

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
