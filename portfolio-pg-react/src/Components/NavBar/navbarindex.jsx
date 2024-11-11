import React, { useState } from 'react';
import { FaBars, FaReact } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { HiX } from 'react-icons/hi';
import './navbarstyles.scss';   


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
    //MANAGE TOGGLE STATE USING USESTATE
    const [toggleIcon, setToggleIcon] = useState(false);

    //TOGGLE THE BOOLEAN FROM TRUE OR FALSE
    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    };

    return (
        <div>
            <nav className='nav-bar'>
            <div className='nav-item'>
            <Link to={'/'} className='nav-bar-logo'>
            <FaReact size={30}/>
            </Link>
            </div>

            <ul className={`nav-menu ${toggleIcon ? 'active' : ''}`}>

            {dummyData.map( (item,key) => (
                <li key={key} className='nav-menu-item'>
                    <Link className='nav-menu-item-links' to={item.to}>
                    {item.label}
                    </Link>
                </li>
            ))}


            </ul>
            <div className='toggle-icon' onClick={handleToggleIcon}>
            {toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>}
            </div>


            </nav>
        </div>
    )

}

export default Navbar;