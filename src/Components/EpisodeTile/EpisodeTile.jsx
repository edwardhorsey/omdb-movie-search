import React, { Component } from 'react';
import styles from './EpisodeTile.module.scss';

class EpisodeTile extends Component {
  state = {  }

  render() { 
    const { Title, Released, Episode, imdbRating, imdbID } = this.props.data;
    return ( 
      <section className={styles.EpisodeTile}>
        <div>
          <p>Title : {Title}</p>
          <p>Released: {Released}</p>
          <p>Episode: {Episode}</p>
          <p>imdbRating: {imdbRating}</p>
          <p>imdbID: {imdbID}</p>
        </div>
      </section>
    );
  }
}
 
export default EpisodeTile;