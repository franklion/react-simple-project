import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nav from '../../components/Nav'


// style
import './style.css'


class HomeContainer extends Component {
    render() {
        return (
            <div>
                <h1>HomeContainer</h1>
                <Nav />                
            </div>
           
       )
    }
}

HomeContainer.propTypes = {}

export default HomeContainer