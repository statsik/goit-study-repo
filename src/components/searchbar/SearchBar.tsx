import './SearchBar.css';
import { toast, Toaster } from 'react-hot-toast';

interface intTopic{
  topic: string;
}

type SearchBarType = {
  onSubmit:(intTopic: intTopic) => void;
}

const SearchBar:React.FC<SearchBarType> = ({ onSubmit }) => {
    const handleSubmit = (event:React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      const input = form.elements.namedItem("topic") as HTMLInputElement;
      if (!input) {
        toast.error("Input not found.");
        return;
      }
      const topic = input.value;
      if (topic.trim() === "") {
        toast.error("This didn't work.");
        return;
      }

      onSubmit({ topic });
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