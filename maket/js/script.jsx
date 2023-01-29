import '@maket/css/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from '@components/App.jsx'
import { BrowserRouter } from 'react-router-dom'

const wrap = document.querySelector('#wrap')

ReactDOM.render(<BrowserRouter ><App /></BrowserRouter>, wrap)
