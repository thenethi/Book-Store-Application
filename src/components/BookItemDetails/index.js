import { Component } from "react";
import { FaStar,FaMinus,FaPlus } from "react-icons/fa";
import CartContext from "../../context/CartContext";
import Header from "../Header";
import Footer from "../Footer";
import './index.css'


class BookItemDetails extends Component{
    state={specifiedBookItem:{},itemsCount:0}

    componentDidMount(){
        this.getSpecifiedBookItem()
    }

    getSpecifiedBookItem=async()=>{
        const {match}=this.props 
        const {params}=match 
        const {isbn13}=params
        const apiUrl=`https://api.itbook.store/1.0/books/${isbn13}`
        const options={
            method:'GET'
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        this.setState({specifiedBookItem:data})
    }

    minusBtn=()=>{
        const {itemsCount}=this.state 
        if (itemsCount>0){
            this.setState(prev=>({itemsCount:prev.itemsCount-1}))
        }
    }

    plusBtn=()=>{
        this.setState(prev=>({itemsCount:prev.itemsCount+1}))
    }

    render(){
        return(
            <CartContext.Consumer>
                {
                    value=>{
                        const {specifiedBookItem,itemsCount}=this.state 
                        const {title,image,desc,year,subtitle,authors,publisher,rating,price}=specifiedBookItem
                        const {addCartItem}=value 
                        const onClickAddtoCart=()=>{
                            addCartItem({...specifiedBookItem,itemsCount})
                        }
                        return(
                            <div className="book-item-details-main-container">
                <Header/>
                <div className="book-items-details-container">
                <div>
                    <img src={image} alt={title} className="book-items-image"/>
                </div>
                <div className="book-item-details-content-container">
                    <h1 className="book-item-details-title">{title}</h1>
                    <p className="book-item-details-subtitle">{subtitle}</p>
                    <h1 className="book-item-details-price">{price}</h1>
                    <h1 className="book-item-details-about-book-heading">About Book</h1>
                    <p className="book-item-details-description">{desc}</p>
                    <p className="book-item-details-about-book-heading">Year {year}</p>
                    <p className="book-item-details-about-book-heading">Published by - {authors}</p>
                    <p className="book-item-details-description">Publisher - {publisher}</p>
                    <div className="rating-container">
                        <FaStar className="star-icon"/>
                        <p className="book-item-details-about-book-heading">{rating}</p>
                    </div>
                    <div className="items-container">
                             <button type="button" className="minus-plus-btn" onClick={this.minusBtn}>
                                <FaMinus/>
                             </button>
                             <p className="item-count">{itemsCount}</p>
                             <button type="button" className="minus-plus-btn" onClick={this.plusBtn}>
                                <FaPlus/>
                             </button>
                        </div>
                        <button type="button" className="buttons" onClick={onClickAddtoCart}>Add to Cart</button>
                </div>
            </div>
            <Footer/>
            </div>
                        )
                    }
                }
            </CartContext.Consumer>
            
        )
    }
}

export default BookItemDetails