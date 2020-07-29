import React, { Component } from 'react';
import styles from './SearchList.module.scss';
import SearchResults from '../SearchResults';

class SearchList extends Component {
  state = {  }

  renderCards = () => {
    let output;
    if (this.props.data.type === "search") {
      output = this.renderSearch(this.props.data.result)
      return output;
    }

  }

  renderSearch = (data) => {
    if (data) {
      return data.map((result, index) => {
        return <SearchResults key={index} data={result} openModal={this.props.openModal} />
      })
    }
  }

  render() { 
    return ( 
      <section className={styles.cards}>
        {this.props.data ? this.renderCards() : ''}
      </section>
     );
  }
}
 
export default SearchList;