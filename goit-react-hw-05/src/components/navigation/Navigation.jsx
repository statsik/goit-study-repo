import { NavLink } from "react-router-dom";
import './Navigation.css'

const Navigation = () => {
    return (
        <div className="nav-container">
            <NavLink to='/' className="home-nav">Home</NavLink>
            <NavLink to='/movies' className="movies-nav">Movies</NavLink>
        </div>
    )
    
}
export default Navigation;