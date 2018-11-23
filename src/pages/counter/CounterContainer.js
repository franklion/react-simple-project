import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nav from '../../components/Nav'

// components
import Counter from './components/Counter'

// style
import './style.css'


class CounterContainer extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            counter: 0
        }
    }

    render() {
        return (
           <div>
                <h1>CounterContainer</h1>
                <Nav />
                {/* <Counter 
                    counter={this.state.counter}
                    increaseCounter={() => this.increaseCounter()}
                    decreaseCounter={() => this.decreaseCounter()}
                    resetCounter={() => this.resetCounter()}
                /> */}
           </div>
       )
    }

    increaseCounter() {
        console.log(111)
        this.setState({ counter: this.state.counter + 1 }) 
    }

    decreaseCounter() {
        this.setState({ counter: this.state.counter - 1 }) 
    }

    resetCounter() {
        this.setState({ counter: 0 }) 
    }
}

CounterContainer.propTypes = {}

export default CounterContainer