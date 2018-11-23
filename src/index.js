import React from 'react'
import ReactDOM from 'react-dom'
import { MemoryRouter } from 'react-router'
import { BrowserRouter, Route, Link, HashRouter } from 'react-router-dom'

import HomeContainer from './pages/home/HomeContainer'
import BmiContainer from './pages/bmi/BmiContainer'
import CounterContainer from './pages/counter/CounterContainer'

import 'antd/dist/antd.css'
import './public/css/style.css'

ReactDOM.render(
    <MemoryRouter initialEntries={['/', '/one', '/two']} initialIndex={0}>
        <div>
            <Route path="/" component={ HomeContainer } exact />
            <Route path="/one" component={ BmiContainer } exact />
            <Route path="/two" component={ CounterContainer } exact />
        </div>
           
        {/* <HomeContainer /> */}
    </MemoryRouter>,

    // <BrowserRouter>
    //     <section>
    //         <Route path="/" component={ HomeContainer } exact />
    //         <Route path="/bmi" component={ BmiContainer }/>
    //         <Route path="/counter" component={ CounterContainer } />
    //     </section>           
    //   </BrowserRouter>,
    document.getElementById('main')
)
