import React from "react";

import SearchBar from "./SearchBar";
import ImageGallery from "./ImageGallery";
import Button from "./Button";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

import articlesApi from "./ApiServices";
import Modal from "./Modal";

class App extends React.Component {
  state = {
    articles: [],
    query: "",
    page: 1,
    isLoading: false,
    showModal: false,
    largeImage: "",
  };

  componentDidUpdate(prevProps, prevState) {
    const prevQurey = prevState.query;
    const currQurey = this.state.query;

    if (prevQurey !== currQurey) {
      this.fetchImage();
    }
  }

  fetchImage = () => {
    this.setState({ isLoading: true });
    articlesApi
      .fetchImageDatabyQuery(this.state.query, this.state.page)
      .then((response) =>
        this.setState((prevState) => {
          return {
            articles: [...prevState.articles, ...response],
            page: prevState.page + 1,
          };
        })
      )
      .catch((err) => console.log(err))
      .finally(() => {
        return this.setState({ isLoading: false });
      });
  };

  handleQuery = (query) => {
    if (this.state.query === query) {
      console.log("1");

      return false;
    }

    this.setState({
      query: query,
      page: 1,
      articles: [],
    });
  };

  scrollToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  getLargeImage = (e) => {
    this.setState({ largeImage: e.target.dataset.largeimage });
    this.toggleModal(e);
  };

  toggleModal = (e) => {
    e.stopPropagation();
    this.setState((prevState) => {
      return {
        showModal: !prevState.showModal,
      };
    });
  };

  render() {
    return (
      <div className="App">
        <SearchBar throwQuery={this.handleQuery} />
        {this.state.articles.length > 1 && (
          <ImageGallery
            articles={this.state.articles}
            handleLargeImage={this.getLargeImage}
          />
        )}
        {this.state.page > 2 && this.scrollToBottom()}
        {this.state.isLoading === true && (
          <Loader
            className="Loader"
            type="MutatingDots"
            color="#00BFFF"
            height={100}
            width={100}
          />
        )}
        {this.state.articles.length > 1 && this.state.isLoading !== true && (
          <Button fetchNewImages={this.fetchImage} />
        )}
        {this.state.largeImage !== "" && this.state.showModal === true && (
          <Modal
            toggleModal={this.toggleModal}
            largeImage={this.state.largeImage}
          />
        )}
      </div>
    );
  }
}

export default App;
