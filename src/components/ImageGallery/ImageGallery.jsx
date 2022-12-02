import React from 'react';

import { ImageGalleryItem } from 'components';
import PropTypes from 'prop-types';

import s from './ImageGallery.module.css';

function ImageGallery({ hits, onItemClick }) {
  const elements = hits.map(element => (
    <ImageGalleryItem
      key={element.id}
      {...element}
      onImageClick={onItemClick}
    />
  ));
  return <ul className={s.gallery}>{elements}</ul>;
}

ImageGallery.propTypes = {
  hits: PropTypes.arrayOf(PropTypes.shape()),
  onItemClick: PropTypes.func,
};

export default ImageGallery;
