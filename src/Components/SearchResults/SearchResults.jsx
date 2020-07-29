import React, { Component } from 'react';
import styles from './SearchResults.module.scss';

class SearchResults extends Component {
  state = {  }

  render() { 
    const { Title, Poster, Type, Year, imdbID } = this.props.data
    
    return ( 
      <article className={styles.searchResults}>
        <p>SearchResults</p>
        <div>
          <h3 onClick={() => {this.props.openModal(imdbID, Type)}} >{Title}</h3>
          <p>Type: {Type}</p>
          <p>Year: {Year}</p>
          <p>imdb ID: {imdbID}</p>
        </div>
        <img onClick={() => {this.props.openModal(imdbID, Type)}}  src={Poster} alt="Movie poster"/>
      </article>
     );
  }
}
 
export default SearchResults;
