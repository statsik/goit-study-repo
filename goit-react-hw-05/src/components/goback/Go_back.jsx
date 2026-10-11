import { Link } from "react-router-dom";
import './Go_back.css'

const GoBack = ({path}) => {
    return (
        <Link to={path} className="gobackbtn">Go Back</Link>
    )
}
export default GoBack;