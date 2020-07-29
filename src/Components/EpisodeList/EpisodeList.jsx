import React, { Component } from 'react';
import styles from './EpisodeList.module.scss';
import EpisodeTile from "../EpisodeTile";

class EpisodeList extends Component {
  state = {  }

  render() { 
    return ( 
      <section className={styles.episodeList}>
        {this.props.data.map(episode => {
          return <EpisodeTile data={episode} />
        })}
      </section>
     );
  }
}
 
export default EpisodeList;
