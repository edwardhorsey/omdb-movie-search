import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import FiltersList from '../FiltersList';
import Search from '../Search';

class NavBar extends Component {

  render() { 
    return ( 
      <nav className={styles.navBar}>
        <h3>Movie & TV Show Search</h3>
        <Search search={this.props.search} />
      </nav>
     );
  }
}
 
export default NavBar;