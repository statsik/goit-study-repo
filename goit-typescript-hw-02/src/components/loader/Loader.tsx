import { useState, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const Loader = () => {
    const [loading] = useState<boolean>(true);
    return (
        <div className="sweet-loading">
        <ClipLoader
            loading={loading}
            cssOverride={override}
            size={50}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
        </div>
    );
}
export default Loader;