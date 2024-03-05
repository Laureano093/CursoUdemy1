import PropTypes from 'prop-types';
const GifItem = ({image}) => {
  return (
    <div className='card'>
      <img src={image.url}></img>
      <p>{image.title}</p>
    </div>
  )
}

GifItem.propTypes = {
    image:PropTypes.object.isRequired
    
  };

export default GifItem
