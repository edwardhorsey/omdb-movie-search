import React, { Component } from 'react';
import styles from './Modal.module.scss';

class Modal extends Component {
  state = {  }

  render() { 
    const { Title, Poster, Runtime, Released, Rated, Plot, Country, Actors, Year, imdbRating } = this.props.modalData
    
    return ( 
      <article className={styles.modal}>
        <button onClick={this.props.closeModal}>Back</button>
        <img src={Poster} alt="Movie poster"/>
        <div>
          <h3>{Title}</h3>
          <p>{Runtime}</p>
          <p>{Released}</p>
          <p>{Rated}</p>
          <p>{Plot}</p>
          <p>{Country}</p>
          <p>{Actors}</p>
          <p>{Year}</p>
          <p>{imdbRating}</p>
        </div>
      </article>
     );
  }
}
 
export default Modal;
