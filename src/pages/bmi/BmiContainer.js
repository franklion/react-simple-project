import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Nav from '../../components/Nav'


// style
import './style.css'


class BmiContainer extends Component {
    render() {
        return (
            <div>
                <h1>BmiContainer</h1>
                <Nav />
            </div>
        )
    }
}

BmiContainer.propTypes = {}

export default BmiContainer