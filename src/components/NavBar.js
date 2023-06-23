import React from "react"
import { NavLink } from "react-router-dom"

function NavBar() {
    
    const linkStyles = {
        display: "inline-block",
        width: "fit-content",
        padding: "12px",
        margin: "0 6px 6px",
        background: "#FFDDD2",
        textDecoration: "none",
        color: "white",
        textAlign: "center",
    };

    return (
        <div className="navbar">
            <NavLink to="/" exact style={linkStyles} activeStyle={{background: "#CF5C36"}}>Home</NavLink>
            <NavLink to="/about" exact style={linkStyles} activeStyle={{background: "#CF5C36"}}>About</NavLink>
            <NavLink to="/tutors" exact style={linkStyles} activeStyle={{background: "#CF5C36"}}>Meet Our Tutors</NavLink>
            <NavLink to="/contact" exact style={linkStyles} activeStyle={{background: "#CF5C36"}}>Contact Us</NavLink>
            <NavLink to="/testimonials" exact style={linkStyles} activeStyle={{background: "#CF5C36"}}>Testimonials</NavLink>
        </div>
    )
}

export default NavBar;