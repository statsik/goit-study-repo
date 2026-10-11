import './SearchBar.css';
import { toast, Toaster } from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const topic = form.elements.topic.value;
      if (topic.trim() === "") {
        toast.error("This didn't work.");
        return;
      }

      onSubmit(topic);
      form.reset();
    };
    return (
        <header>
            <form className="search-form" onSubmit={handleSubmit}>
                <input
                type="text"
                autoComplete="off"
                autoFocus
                placeholder="Search images and photos"
                name="topic"
                className="search-input"
                />
                <button className="search-button" type="submit">Search</button>
            </form>
            <Toaster />
        </header>
    );
}
export default SearchBar;