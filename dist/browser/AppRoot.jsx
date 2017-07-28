import React, {Component} from 'react'

class AppRoot extends Component {
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">PeopleGrove React</a>
        </nav>
        {this.props.children}
      </div>
    )
  }
}

export default AppRoot