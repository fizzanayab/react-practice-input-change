import React, { Component } from 'react';
import SocialMedia from '../socialmedia/SocialMedia';
import './Navbar.css';
import Menu from '../menu/Menu';
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuClass: 'menu1',  
    };
  }

  toggleMenu = () => {
    if (this.state.menuClass === 'menu1') {
      this.setState({ menuClass: 'menu2' });
    } else {
      this.setState({ menuClass: 'menu1' });
    }
  };

  render() {
    return (
      <div>
        <div className="navbar container-fluid">
          <div className='logo'>Fizza</div>
          <div className='social'><ul className="social_media_ul">
          <SocialMedia icon_name="facebook" />
          <SocialMedia icon_name="twitter" />
          <SocialMedia icon_name="youtube" />
          <SocialMedia icon_name="pinterest-square" />
        </ul></div>
          <button className='btn btn-warning' onClick={this.toggleMenu}>Menu</button>
        </div>
        <Menu menuClass={this.state.menuClass} />  
      </div>
    );
  }
}

export default Navbar;
