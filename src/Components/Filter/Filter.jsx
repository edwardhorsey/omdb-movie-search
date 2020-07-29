import React, { Component } from 'react';
import styles from './Filter.module.scss';

class Filter extends Component {
  state = {  }
  render() { 
    return <li className={styles.filter}>{this.props.label}<input type="checkbox" onChange={this.props.logic}/></li>
  }
}
 
export default Filter;