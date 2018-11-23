import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link, HashRouter } from 'react-router-dom'

import HomeContainer from './pages/home/HomeContainer'
import BmiContainer from './pages/bmi/BmiContainer'
import CounterContainer from './pages/counter/CounterContainer'

import 'antd/dist/antd.css'
import './public/css/style.css'

ReactDOM.render(
    <BrowserRouter>
        <HashRouter>
            <section>
                <Route path="/" component={ HomeContainer } exact />
                <Route path="/bmi" component={ BmiContainer }/>
                <Route path="/counter" component={ CounterContainer } />
            </section>           
        </HashRouter>
      </BrowserRouter>,
    document.getElementById('main')
)
