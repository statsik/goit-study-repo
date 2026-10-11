import { useState, useEffect } from 'react';
import './App.css';
import SearchBar from './components/searchbar/SearchBar';
import ImageGallery from './components/imagegallery/ImageGallery';
import Loader from './components/loader/Loader';
import axios from "axios";
import ErrorMessage from './components/errormessage/ErrorMessage'; 
import LoadMoreBtn from './components/loadmorebtn/LoadMoreBtn';
import ImageModal from './components/imagemodal/ImageModal';

const API_URL = 'https://api.unsplash.com/search/photos';
const API_KEY = '2gccEf5nNL5f-qpjUNez7-ERKVTgjTOeiGh-UC764RI';

function App() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState(''); 
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false); 
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      if (!query) return;
      try {
        setLoading(true);
        const response = await axios.get(API_URL, {
          params: {
            query,
            page,
            per_page: 12,
            client_id: API_KEY,
          },
        });
        setArticles(prevArticles => [...prevArticles, ...response.data.results]);
        setError(false); 
      } catch (error) {
        setError(true); 
      } finally {
        setLoading(false);
      }
    }
    fetchArticles();
  }, [query, page]); 

  const loadMoreImages = () => {
    event.preventDefault();
    setPage(prevPage => prevPage + 1);
  };

  const handleSubmit = (searchTerm) => {
    setQuery(searchTerm);
    setArticles([]); 
    setPage(1);  
  };

  const openModal = (image) => {
    setSelectedImage(image); 
    setModalIsOpen(true);  
  };

  const closeModal = () => {
    setModalIsOpen(false);  
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      {error && <ErrorMessage />} 
      {!error && (
        <div>
          <ImageGallery articles={articles} openModal={openModal} />
          {loading && (<Loader />)}
        </div>
      )}
      {articles.length > 0 && !loading && <LoadMoreBtn onClick={loadMoreImages} disabled={loading} />}
      <ImageModal 
        isOpen={modalIsOpen} 
        onClose={closeModal} 
        image={selectedImage} 
      />
    </>
  );
}

export default App;