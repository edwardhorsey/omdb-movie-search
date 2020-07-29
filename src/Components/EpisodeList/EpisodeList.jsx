import React, { Component } from 'react';
import styles from './EpisodeList.module.scss';
import EpisodeTile from "../EpisodeTile";

class EpisodeList extends Component {

  render() { 
    return ( 
      <section className={styles.episodeList}>
        {this.props.data.map((episode, index) => <EpisodeTile ley={index} data={episode} />)}
      </section>
     );
  }
}
 
export default EpisodeList;
