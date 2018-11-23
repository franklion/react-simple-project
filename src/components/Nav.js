import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/" className="link">home</Link>
        <Link to="/one" className="link">one</Link>
        <Link to="/two" className="link">two</Link>
      </div>
    )
  }
}
