import { NavLink } from 'react-router-dom'
import './navbar.css'
function Navbar(){
    return (
        <nav className="flex">
            <div className="left logo">COMPONENTS</div>
            <div className="right">
                <NavLink className="btn Home" to="/" >Normal Component</NavLink>
                <NavLink className="about btn" to="/Pure-Component">Pure Component</NavLink>
                <NavLink className="project btn" to="/HOC">High Order Component</NavLink>
                <NavLink className="contact btn" to="/contact">Contact</NavLink>
            </div>
        </nav>
    )
}
export	default	Navbar