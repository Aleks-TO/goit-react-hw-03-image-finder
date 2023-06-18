import css from './imageGallery.module.css';
import ImageGalleryItem from 'components/imageGalleryItem/imageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ pictures }) => {
  return (
    <ul class="gallery">
      {pictures.map(el => (
        <ImageGalleryItem el={el} key={el.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  pictures: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
