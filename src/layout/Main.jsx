import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/preloader";
import { Search } from "../components/search";

const API_KEY =process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    whatSearch: "",
    type: "",
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
        console.log(err);
        this.setState({loading:false})
          })
  }

  searchMovie = (kino, tip) => {
    this.setState({ loading: true });
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${kino}&type=${tip}`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }))
      .catch((err) => {
            console.log(err);
            this.setState({loading:false})
              })
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovie={this.searchMovie} />
        {loading ? (
            <Preloader />
        ):( 
        <Movies movies={this.state.movies} />
    )}
      </main>
    )}
  }

export { Main };
