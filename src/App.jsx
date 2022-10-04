import { useState, useEffect } from 'react';

import { fetch } from 'components/fetch/fetch.jsx';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Searchbar } from './components/Searchbar/Searchbar.jsx';
import { ImageGallery } from './components/ImageGallery/ImageGallery.jsx';
import { Button } from 'components/Button/Button.jsx';
import { Loader } from 'components/Loader/Loader.jsx';
import { Modal } from 'components/Modal/Modal.jsx';
import app from './App.module.css';

export default function App() {
  const [searchName, setSearchName] = useState('');
  const [response, setResponse] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  useEffect(() => {
    if (!searchName || !page) {
      return;
    }
    setIsLoading(true);
    fetch(searchName, page)
      .then(response => {
        if (response.length === 0) {
          Notify.warning('Упс, ничего не нашли');
        }
        page === 1
          ? setResponse(response)
          : setResponse(prev => [...prev, ...response]);
      })
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false));
  }, [page, searchName]);

  const handleFormSubmit = searchName => {
    setSearchName(searchName);
    setPage(1);
  };

  const handlLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const toggleModal = image => {
    if (image) {
      setIsModalOpen(true);
      setModalImage(image);

      return;
    }
    setIsModalOpen(false);
    setModalImage('');
  };

  return (
    <div className={app.app}>
      <Searchbar onSubmit={handleFormSubmit} />
      <ImageGallery toggleModal={toggleModal} response={response} />
      {isLoading && <Loader />}
      {!!response.length && !isLoading && <Button onClick={handlLoadMore} />}

      {isModalOpen && (
        <Modal toggleModal={toggleModal} modalImage={modalImage} />
      )}
    </div>
  );
}
