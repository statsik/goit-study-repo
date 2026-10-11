import './SearchBox.css'
const SearchBox = ({searchTerm, onSearch}) => {
    const handleChange = (evt) => {
        onSearch(evt.target.value);
    };
    
    return (
        <div className="search-box">
            <p>Find contacts by name</p>
            <input type="text" value={searchTerm} onChange={handleChange} />
        </div>
    )
}
export default SearchBox;