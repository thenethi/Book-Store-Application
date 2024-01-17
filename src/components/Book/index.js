import { Component } from "react";
import Header from "../Header";
import Footer from "../Footer";
import BookItems from '../BookItems'
import './index.css'


class Book extends Component{
    state={booksList:[]}

    componentDidMount(){
        this.getBookItems()
    }

    getBookItems=async()=>{
        const apiUrl='https://api.itbook.store/1.0/new'
        const options={
            method:'GET'
        }
        const response=await fetch(apiUrl,options)
        const data=await response.json()
        this.setState({booksList:data.books})
    }

    render(){
        const {booksList}=this.state 
        return(
            <>
                <Header/>
                <ul type="none" className="book-item-list">
                    {
                        booksList.map((each)=><BookItems bookItem={each} key={each.isbn13}/>)
                    }
                </ul>
                <Footer/>
            </>
        )
    }
}

export default Book 