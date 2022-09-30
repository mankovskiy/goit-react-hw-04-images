import imageGallery from './ImageGallery.module.css';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

export function ImageGallery({ response, toggleModal }) {
  return (
    <>
      <ul className={imageGallery.imageGallery}>
        {response.map(({ id, webformatURL, tags, largeImageURL }) => {
          return (
            <ImageGalleryItem
              key={id}
              webformatURL={webformatURL}
              tags={tags}
              largeImageURL={largeImageURL}
              toggleModal={toggleModal}
            />
          );
        })}
      </ul>
    </>
  );
}
