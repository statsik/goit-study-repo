const ImageCard = ({ image }) => {
  const imageUrl = image?.urls?.small || null; 

  return (
    <div>
      {imageUrl ? (
        <img src={imageUrl} alt={image.alt_description || 'Img'} />
      ) : (
        <p>No image available</p>
      )}
    </div>
  );
};
export default ImageCard;