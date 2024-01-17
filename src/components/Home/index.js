import { Component } from "react";
import {Link} from 'react-router-dom'
import Header from "../Header";
import NewReleases from "../NewReleases";
import HeroSection from "../HeroSection";
import Footer from "../Footer";
import './index.css'



class Home extends Component{
    

    render(){
        return(
            <div>
                <Header/>
                <HeroSection/>
                <NewReleases/>
                <div className="button-container">
                    <Link to="/books">
                        <button type="button" className="explore-more-button">Explore More</button>
                    </Link>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default Home