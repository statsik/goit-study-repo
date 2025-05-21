type LoadMoreBtn = {
    onClick: () => void;
    disabled?: boolean;
}

const LoadMoreBtn:React.FC<LoadMoreBtn> = ({ onClick }) => {
    return (
        <button onClick={onClick}>Load More</button>
    );
}

export default LoadMoreBtn;
