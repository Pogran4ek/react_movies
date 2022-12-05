import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "",
  };

  handleKey = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovie(this.state.search, this.state.type);
    }
  };

  whatMovies = (event) => {
    this.setState({ type: event.target.value });
  };
  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            id="search"
            type="search"
            className="validate"
            placeholder="search"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn poh"
            onClick={() =>
              this.props.searchMovie(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
        <div className="radioKnopki">
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value=""
              defaultChecked
              onChange={this.whatMovies}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="series"
              onChange={this.whatMovies}
            />
            <span>series</span>
          </label>
          <label>
            <input
              className="with-gap"
              name="type"
              type="radio"
              value="movie"
              onChange={this.whatMovies}
            />
            <span>movie</span>
          </label>
        </div>
      </div>
    );
  }
}

export { Search };
