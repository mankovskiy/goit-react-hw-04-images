import { Component } from 'react';

import { fetch } from 'components/fetch/fetch.jsx';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Searchbar } from './components/Searchbar/Searchbar.jsx';
import { ImageGallery } from './components/ImageGallery/ImageGallery.jsx';
import { Button } from 'components/Button/Button.jsx';
import { Loader } from 'components/Loader/Loader.jsx';
import { Modal } from 'components/Modal/Modal.jsx';
import app from './App.module.css';

export default class App extends Component {
  state = {
    searchName: '',
    response: [],
    page: 1,
    isLoading: false,
    isModalOpen: false,
    modalImage: '',
  };

  componentDidUpdate(_, prevState) {
    const { searchName, page } = this.state;
    if (prevState.searchName !== searchName || prevState.page !== page) {
      this.setState({ isLoading: true });

      fetch(searchName, page)
        .then(response => {
          this.setState(prev => ({
            response: page === 1 ? response : [...prev.response, ...response],
          }));
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  handleFormSubmit = searchName => {
    this.setState({ searchName, page: 1 });

    // if (!!this.state.response) {
    //   return Notify.warning('Фото не найдено');
    // }
  };

  handlLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  toggleModal = image => {
    if (image) {
      this.setState({ isModalOpen: true, modalImage: image });

      return;
    }
    this.setState({ isModalOpen: false, modalImage: '' });
  };

  render() {
    const { response, searchName } = this.state;

    return (
      <div className={app.app}>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImageGallery
          toggleModal={this.toggleModal}
          response={response}
          searchName={searchName}
        />
        {this.state.isLoading && <Loader />}
        {!!this.state.response.length && !this.state.isLoading && (
          <Button onClick={this.handlLoadMore} />
        )}

        {this.state.isModalOpen && (
          <Modal
            toggleModal={this.toggleModal}
            modalImage={this.state.modalImage}
            // altTags={this.state.response.tags}
          />
        )}
      </div>
    );
  }
}
