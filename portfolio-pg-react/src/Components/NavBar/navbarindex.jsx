import React from 'react';
import { FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Navbar = () => {

    const dummyData = [
        {
            label : "HOME",
            to : "/"
        },
        {
            label : "ABOUT",
            to : "/about"
        },
        {
            label : "CONTACT",
            to : "/contact"
        },
        {
            label : "PORTFOLIO",
            to : "/portfolio"
        },
        {
            label : "RESUME",
            to : "/resume"
        },
        {
            label : "SKILLS",
            to : "/skills"
        }
    ]

    return (
        <div>
            <nav className='nav-bar'>
            <div className='nav-item'>
            <Link to={'/'} className='nav-bar-logo'>
            <FaReact size={30}/>
            </Link>
            </div>

            <ul className='nav-menu'>

            {dummyData.map( (item,key) => (
                <li key={key} className='nav-menu-item'>
                    <Link className='nav-menu-item-links' to={item.to}>
                    {item.label}
                    </Link>
                </li>
            ))}


            </ul>


            </nav>
        </div>
    )

}

export default Navbar;