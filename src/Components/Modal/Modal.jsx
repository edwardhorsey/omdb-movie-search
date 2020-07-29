import React, { Component } from 'react';
import styles from './Modal.module.scss';

class Modal extends Component {
  state = {  }

  render() { 
    const { Title, Poster } = this.props.data
    
    return ( 
      <article className={styles.modal}>
        <p>Modal</p>
        <div>
          <h3>{Title}</h3>
        </div>
        <img src={Poster} alt="Movie poster"/>
      </article>
     );
  }
}
 
export default Modal;
