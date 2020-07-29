import React, { Component } from 'react';
import styles from './Card.module.scss';

class Card extends Component {
  state = {  }

  render() { 
    const { Title, Poster } = this.props.data
    
    return ( 
      <article className={styles.card}>
        <p>CARD</p>
        <div>
          <h3>{Title}</h3>
        </div>
        <img src={Poster} alt="Movie poster"/>
      </article>
     );
  }
}
 
export default Card;
