import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Router from './routes.jsx'
import loja from './Loja/Reducers/index.jsx'
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={loja}>
      <Router />
    </Provider>

  </React.StrictMode>,
)
