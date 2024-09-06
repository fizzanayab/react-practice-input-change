import React from 'react';
import './Menu.css';

class Menu extends React.Component {
  render() {
    return (
      <div className={`menu ${this.props.menuClass}`}>
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Service</li>
          <li>Page v</li>
        </ul>
      </div>
    );
  }
}

export default Menu;
