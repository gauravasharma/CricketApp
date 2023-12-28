
import React, { useState } from "react"
import {Link, NavLink} from 'react-router-dom'
import "./NavBar.css"

export default function NavBar()
{
    const [menuOpen, setMenuOpen] = useState(false);
     return (
         <>
         <nav>
            <div className="menu" onClick={()=>{
                console.log('working');
                setMenuOpen(!menuOpen);
                }}>
                 <span></span>
                 <span></span>
                 <span></span>
            </div>
            <NavLink to ="/" className="title">Spokane Cricket</NavLink>
            <ul className = {menuOpen ? "open": ""}>
            <li>
                <NavLink to="/players">Players</NavLink>
                </li>
                <li>
                <NavLink to="/schedule">Schedule</NavLink>
                </li>
                <li>
                <NavLink to="/expense">Expense</NavLink>
                </li>
                <li>
                <NavLink to="/Contact">Contact</NavLink>
                </li>
                <li>
                <NavLink to="/Login">Login</NavLink>
                </li>
            </ul>
         </nav>
         </>
     );
}