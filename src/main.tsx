import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import './darkMode'
import App from './App'
import {store, persistor} from './store/store'
import { Provider } from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById('root')
)
