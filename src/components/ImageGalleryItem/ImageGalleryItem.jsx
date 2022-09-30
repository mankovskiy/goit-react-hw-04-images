import PropTypes from 'prop-types';
import imageGalleryItem from './ImageGalleryItem.module.css';

import imageGalleryItemImage from './ImageGalleryItem.module.css';

export function ImageGalleryItem({
  id,
  webformatURL,
  tags,
  largeImageURL,
  toggleModal,
}) {
  return (
    <li key={id} className={imageGalleryItem.imageGalleryItem}>
      <img
        className={imageGalleryItemImage.imageGalleryItemImage}
        src={webformatURL}
        alt={tags}
        // data-source={largeImageURL}
        onClick={() => toggleModal(largeImageURL)}
      />
    </li>
  );
}

ImageGalleryItem.propTypes = {
  id: PropTypes.string,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  largeImageURL: PropTypes.string,
};
