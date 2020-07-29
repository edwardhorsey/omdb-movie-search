import React, { Component } from 'react';
import styles from './Main.module.scss';
import CardList from '../CardList/CardList';
import Modal from "../Modal";

class Main extends Component {
  state = { 
    stage: 1,
    modalShowing: false,
   }

   closeModal = () => {
     this.setState({ modalShowing: !this.state.modalShowing })
   }

   openModal = (id, tvShow) => {
     tvShow = tvShow === 'series' ? true : false;
     this.setState({modalShowing: !this.state.modalShowing});
     this.props.modalRequest(id, tvShow);
     console.log(`open modal with ${id}`);
   }

  render() { 

    return ( 
      <article className={styles.main}>
        <p>Main</p>
        {this.state.modalShowing? <Modal modalData={this.props.modalData} closeModal={this.closeModal} /> : ''}
        <CardList data={this.props.data} openModal={this.openModal} />
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
