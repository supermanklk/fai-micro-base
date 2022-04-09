import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { registerMicroApps, start } from 'qiankun'

registerMicroApps([
  {
    name: 'react app', // app name registered
    entry: '//localhost:30002',
    container: '#fai-micro-app1',
    activeRule: '/fai-micro-app1'
  }
])

start()

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
