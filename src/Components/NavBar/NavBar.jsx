import React, { Component } from 'react';
import styles from './NavBar.module.scss';
import FiltersList from '../FiltersList';
import Search from '../Search';

class NavBar extends Component {

  render() { 
    return ( 
      <nav className={styles.navBar}>
        <div className={styles.top}>
          <h3>Movie & TV Show Search</h3>
          <Search search={this.props.search} />
        </div>
        <p>Enter your search term, you can include a year</p>
      </nav>
     );
  }
}
 
export default NavBar;