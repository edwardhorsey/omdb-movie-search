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
     this.setState({ modalShowing: false })
   }

   openModal = (id, tvShow, season=1) => {
     tvShow = tvShow === 'series' ? true : false;
     this.props.modalRequest(id, tvShow, season);
     console.log(`open modal with ${id}`);
     this.setState({modalShowing: true});
   }

  render() { 

    return ( 
      <article className={styles.main}>
        <p>Main</p>
        {this.state.modalShowing? <Modal searchData={this.props.data} modalData={this.props.modalData} closeModal={this.closeModal} openModal={this.openModal} /> : ''}
        <CardList data={this.props.data} openModal={this.openModal} />
      </article>
     );
  }
}
 
export default Main;
