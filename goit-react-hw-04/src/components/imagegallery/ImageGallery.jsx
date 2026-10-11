import ImageCard from "../imagecard/ImageCard";
import './ImageGallery.css';

const ImageGallery = ({ articles, openModal }) => {
  if (!Array.isArray(articles)) {
    return <p>No images found</p>; 
  }

  return (
    <ul className="image-card">
      {articles.length > 0 && (
            articles.map(article => (
            <li key={article.id} className="image-item">
            <div className="image-card" onClick={() => openModal(article)}>
              <ImageCard image={article} />
            </div>
          </li>
        ))
      )}
    </ul>
  );
};


export default ImageGallery;