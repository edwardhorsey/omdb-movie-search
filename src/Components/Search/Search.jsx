import React, { Component } from 'react';
import styles from './Search.module.scss';

class Search extends Component {

  render() { 
    return ( 
      <div className={styles.search}>
        <input type="text" placeholder="Ali ... " onChange={this.props.search}/>
      </div>
     );
  }
}
 
export default Search;