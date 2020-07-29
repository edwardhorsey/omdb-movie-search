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

  renderSeasonsList = (num) => {
    let output = [];
    for (let i=0;i<num;i++) {
    output.push(<option value={i+1}>{i+1}</option>)
    }
    return output;
  }

  renderSeries = () => {
    console.log(this.props.modalData.data);
    const { Title, Season, Episodes, totalSeasons } = this.props.modalData.data;
    const { Poster, imdbID } = this.props.searchData.result.find(result => result.Title === Title);
    return (
      <>
        <img src={Poster} alt="Movie poster"/>
        <div>
          <h3>Title: {Title}</h3>
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
