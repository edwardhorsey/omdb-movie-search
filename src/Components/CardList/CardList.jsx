import React, { Component } from 'react';
import styles from './CardList.module.scss';
import SearchResults from '../SearchResults';

class CardList extends Component {
  state = {  }

  renderCards = () => {
    let output;
    if (this.props.data.type === "search") {
      console.log(this.props.data)
      output = this.renderSearch(this.props.data.result)
      return output;
    }

  }

  renderSearch = (data) => {
    if (data) {
      return data.map(result => {
        return <SearchResults data={result} openModal={this.props.openModal} />
      })
    }
  }

  render() { 
    return ( 
      <section className={styles.cards}>
        {this.props.data ? this.renderCards() : ''}
        <p>CardList</p>
      </section>
     );
  }
}
 
export default CardList;