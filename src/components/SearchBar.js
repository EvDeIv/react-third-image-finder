import React from "react";

class SearchBar extends React.Component {
  state = {
    input: "",
  };

  setInput = (e) => {
    this.setState({ input: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.throwQuery(this.state.input);
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              type="text"
              className="SearchForm-input"
              autoComplete="off"
              autoFocus
              placefolder="Search images and photos"
              onChange={this.setInput}
            />
          </form>
        </header>
      </>
    );
  }
}

export default SearchBar;
