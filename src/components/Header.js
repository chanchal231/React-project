 import React from "react";
 import { Link } from "react-router-dom";

 
function Header () {
    return(
        <div>
        <nav className="App">
        <ul className = "nav">
            <li>
                <Link to ="/"> Home</Link>
            </li>
            <li>
                <Link to ="/About"> About</Link>
            </li>
            <li>
                <Link to ="/Login"> <button>Login</button></Link>
            </li>
            <form>
                <label>search</label>
                <input type="text" placeholder="search"></input>
            </form>
        </ul>
        </nav>
        </div>
    )
}

export default Header;