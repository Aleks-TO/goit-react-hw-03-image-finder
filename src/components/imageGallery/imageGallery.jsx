import css from './imageGallery.module.css';
import ImageGalleryItem from 'components/imageGalleryItem/imageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ul class="gallery">
      {images.map(el => (
        <ImageGalleryItem el={el} key={el.id} />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired })
  ).isRequired,
};
