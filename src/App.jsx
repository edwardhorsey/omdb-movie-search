import React, { Component } from 'react';
import styles from './App.module.scss';
import NavBar from "./Components/NavBar";
import Main from './Components/Main';


class App extends Component {

  state = { data: [], modalData: [] }

  makeRequest = (searchTerm, year) => {
    searchTerm = searchTerm ? '&s=' + searchTerm : '';
    year = year ? '&y=' + year : '';
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ed586e21&s' + searchTerm + year)
      .then(data => data.json())
      .then(data => {
        console.log(data);
          this.setState({data: {type: 'search', result: data.Search }})
      })
      .catch(error => console.log(error))
  }

  splitBySearchAndYear = (string) => {
    if (/\d{4}/.test(string)){
      const year = string.match(/\d{4}/g)[0];
      let output = string.split(' ');
      output.splice(output.indexOf(year), 1);
      return [output, year]
    } else {return [string]}
  }

  search = (event) => {
    event.preventDefault();
    let inputValues = this.splitBySearchAndYear(event.target.value);
    this.makeRequest(...inputValues)
  }

  modalRequest = (id, tvShow, season=1) => {
    if (tvShow) {
      console.log(`searching for tv show ${id}`)
      fetch(`http://www.omdbapi.com/?i=${id}&apikey=ed586e21&s&Season=${season}`)
      .then(data => data.json())
      .then(data => {
        console.log(data);

        this.setState({modalData: {type: 'series', data: { ...data, imdbID: id, }}})
      })
      .catch(error => console.log(error))
    } else {
      console.log(`searching for movie ${id}`)
      fetch(`http://www.omdbapi.com/?i=${id}&apikey=ed586e21&s`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({modalData: {type: 'movie', data: data}})
      })
      .catch(error => console.log(error))
    }
  }

  componentDidMount() {
    this.makeRequest('Ali ')
  }

  render() {

    console.log(this.state)

    return (
      <>
        <div className={styles.App}>
          <NavBar search={this.search} />
          <Main data={this.state.data} modalRequest={this.modalRequest} modalData={this.state.modalData} />
        </div>
      </>
    );
  }
}

export default App;
