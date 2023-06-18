import css from './imageGalleryItem.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({ card }) => {
  return (
    <li key={card.id} className={css.ImageGalleryItem}>
      <img
        src={card.webformatURL}
        alt={card.largeImageURL}
        className={css.ImageGalleryItemImage}
      />
    </li>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.prototype = {
  card: PropTypes.object,
};
