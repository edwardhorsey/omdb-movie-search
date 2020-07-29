import React, { Component } from 'react';
import styles from './Main.module.scss';
import CardList from '../CardList/CardList';

class Main extends Component {
  state = { 
    stage: 1,
    modalShowing: true,
   }

   closeModal = () => {
     this.setState({ modalShowing: !this.state.modalShowing })
   }

   openModal = (id) => {
     console.log(`open modal with ${id}`)
   }

  render() { 

    return ( 
      <article className={styles.main}>
        <p>Main</p>
        <CardList data={this.props.data} openModal={this.openModal} />
        <Modal modalData={this.props.modalData} />
        {/* <img src={image_url} alt="batch of beer"/>
        <div>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p>First Brewed: {first_brewed}</p>
          <p>ABV: {abv}</p>
          <p>pH: {ph}</p>
          <p>IBU: {ibu}</p>
        </div> */}
      </article>
     );
  }
}
 
export default Main;
