import React from 'react'
import { Link } from "react-router-dom"
function CardItem() {
    return (
        <>
            <li className='cards-item'>
                <Link className='cards-item-link'>
                    <figure className='cards-item-pic-wrap'>
                        <img src='/' alt='project' className='cards-item-img'>
                        </img>
                    </figure>
                    <div className='cards_item_info'>
                        <h5 className='cards-item-text'>
                        </h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default CardItem;