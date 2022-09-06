import React, { useState } from 'react'
import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'
import './Dropdown.css';

function Dropdown() {
    const [click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }


    return (
        <div>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : "dropdown-menu"}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.className} to={item.path} onClick={() => setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Dropdown;