import ImageCard from "../imagecard/ImageCard";
import './ImageGallery.css';

interface Article {
  id: number;
  urls: {
    small: string;
    regular: string;
  };
  alt_description?: string;
}

type Props = {
  articles: Article[];
  openModal: (image: Article) => void;
}

const ImageGallery:React.FC<Props> = ({ articles, openModal }) => {
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