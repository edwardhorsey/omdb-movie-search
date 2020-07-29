import React, { Component } from 'react';
import styles from './EpisodeTile.module.scss';

class EpisodeTile extends Component {
  state = {  }

  render() { 
    const { Title, Released, Episode, imdbRating, imdbID } = this.props.data;
    return ( 
      <section className={styles.episodeTile}>
        <div>
          <h4>Title : {Title}</h4>
          <p>Released: {Released}</p>
          <p>Episode: {Episode}</p>
          <p>IMDB Rating: {imdbRating}</p>
          <p>IMDB ID: {imdbID}</p>
        </div>
      </section>
    );
  }
}
 
export default EpisodeTile;