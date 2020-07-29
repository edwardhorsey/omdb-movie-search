import React, { Component } from 'react';
import styles from './Main.module.scss';
import Modal from "../Modal";
import SearchList from '../SearchList/SearchList';

class Main extends Component {
  state = { modalShowing: false }

   closeModal = () => this.setState({ modalShowing: false })

   openModal = (id, tvShow, season=1) => {
     tvShow = tvShow === 'series' ? true : false;
     this.props.modalRequest(id, tvShow, season);
     this.setState({modalShowing: true});
   }

  render() { 

    return ( 
      <article className={styles.main}>
        {this.state.modalShowing? <Modal searchData={this.props.data} modalData={this.props.modalData} closeModal={this.closeModal} openModal={this.openModal} /> : ''}
        <SearchList data={this.props.data} openModal={this.openModal} />
      </article>
     );
  }
}
 
export default Main;
