import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './index.css'

const BookItems=(props)=>{
    const {bookItem}=props 
    const {title,subtitle,image,price,isbn13}=bookItem
    return(
        
            <li className='book-item'>
                <img src={image} alt={title} className='book-image'/>
                <h1 className='book-title'>{title}</h1>
                <p className='book-para'>{subtitle}</p>
                <p className='book-price'>{price}</p>
                <Link to={`/books/${isbn13}`}>
                    <button type="button" className='know-more-btn'>Know More</button>
                </Link>
            </li>
       
    )
}

export default BookItems