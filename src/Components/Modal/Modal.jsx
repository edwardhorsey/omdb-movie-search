import React, { Component } from 'react';
import styles from './Modal.module.scss';
import EpisodeList from "../EpisodeList";

class Modal extends Component {
  state = {  }

  renderMovie = () => {
    const { Title, Poster, Runtime, Released, Rated, Plot, Country, Actors, Year, imdbRating } = this.props.modalData.data
    return (
      <>
        <img src={Poster} alt="Movie poster"/>
        <div>
          <h3>Title: {Title}</h3>
          <p>Runtime: {Runtime}</p>
          <p>Released: {Released}</p>
          <p>Rated: {Rated}</p>
          <p>Plot: {Plot}</p>
          <p>Country: {Country}</p>
          <p>Actors: {Actors}</p>
          <p>Year: {Year}</p>
          <p>imdb Rating: {imdbRating}</p>
        </div>
      </>
    );
  }

  renderSeries = () => {
    console.log(this.props.modalData.data);
    const { Title, Season, Episodes, totalSeasons } = this.props.modalData.data;
    return (
      <>
        {/* <img src={Poster} alt="Movie poster"/> */}
        <div>
          <h3>Title: {Title}</h3>
          <p>Season: {Season}</p>
          <p>Episodes:</p>
          <EpisodeList data={Episodes} />
          <p>Total Seasons: {totalSeasons}</p>
        </div>
      </>
    );
  }

  renderModal = () => {
    if (this.props.modalData) {
      let output;
      if (this.props.modalData.type === 'series'){
        output = this.renderSeries()
        return output
      } else if (this.props.modalData.type === 'movie') {
        output = this.renderMovie()
        return output
      } 
    }
  }

  render() {
    console.log(this.props)

    return ( 
      <article className={styles.modal}>
        <button onClick={this.props.closeModal}>Back</button>
        {this.renderModal()}
      </article>
     );
  }
}
 
export default Modal;
