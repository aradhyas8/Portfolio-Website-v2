import React from 'react'
import ReactDOM from 'react-dom'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>, {/*gives us ability to use routes inside our application*/}
    </React.StrictMode>,
  document.getElementById('root')
)

reportWebVitals();