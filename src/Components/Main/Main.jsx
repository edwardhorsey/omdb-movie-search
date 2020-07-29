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
      </article>
     );
  }
}
 
export default Main;
