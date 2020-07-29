import React, { Component } from 'react';
import styles from './App.module.scss';
import NavBar from "./Components/NavBar";
import Main from './Components/Main';


class App extends Component {

  state = { data: [], modalData: [] }

  makeRequest = (searchTerm) => {
    searchTerm = searchTerm ? '&s=' + searchTerm : '';
    fetch('http://www.omdbapi.com/?i=tt3896198&apikey=ed586e21&s' + searchTerm)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        if (searchTerm) {
          this.setState({data: {type: 'search', result: data.Search}})
        } else {
          this.setState({data: {type: 'movie', result: data}})
        }
      })
      .catch(error => console.log(error))
  }

  search = (event) => {
    event.preventDefault();
    console.log(`search ${event.target.value}`)
    this.makeRequest(event.target.value)
    console.log(process.env.REACT_APP_NOT_SECRET_CODE)
  }

  modalRequest = (id, tvShow) => {
    if (tvShow) {
      console.log(`searching for tv show ${id}`)
      fetch(`http://www.omdbapi.com/?i=${id}&apikey=ed586e21&s&Season=1`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({modalData: {type: 'series', data: data}})
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
    this.makeRequest('South ')
  }

  render() {

    console.log(this.state)

    return (
      <>
        <NavBar search={this.search} />
        <Main data={this.state.data} modalRequest={this.modalRequest} modalData={this.state.modalData} />
      </>
    );
  }
}

export default App;
