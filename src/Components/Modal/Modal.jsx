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
          <div className={styles.titleButton}>
            <h3>{Title}</h3>
            <button onClick={this.props.closeModal}>Back</button>
          </div>
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

  renderSeasonsList = (num) => {
    let output = [];
    for (let i=0;i<num;i++) {
      output.push(<option value={i+1}>{i+1}</option>)
    }
    return output;
  }

  renderSeries = () => {
    const { Title, Season, Episodes, totalSeasons, imdbID } = this.props.modalData.data;
    const { Poster } = this.props.searchData.result.find(result => result.imdbID === imdbID);
    return (
      <>
        <img src={Poster} alt="Movie poster"/>
        <div>
          <div className={styles.titleButton}>
            <h3>{Title}</h3>
            <button onClick={this.props.closeModal}>Back</button>
          </div>
          <p>Total Seasons: {totalSeasons}</p>
          <select name="season" id="season" onChange={(event)=>{this.props.openModal(imdbID, 'series', event.target.value)}}>
            {this.renderSeasonsList(totalSeasons)}
          </select>
          <p>Season: {Season}</p>
          <p>Episodes:</p>
          <EpisodeList data={Episodes} />
        </div>
      </>
    );
  }

  renderModal = () => {
    if (this.props.modalData) {
      if (this.props.modalData.type === 'series'){
        return this.renderSeries()
      } else if (this.props.modalData.type === 'movie') {
        return this.renderMovie()
      } 
    }
  }

  render() {
    return ( 
      <article className={styles.outerModal}>
        <article className={styles.modal}>
          {this.renderModal()}
        </article>
      </article>
     );
  }
}
 
export default Modal;
