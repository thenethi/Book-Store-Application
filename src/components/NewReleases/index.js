import { Component } from "react";
import ReactSlicker from '../ReactSlicker'
import './index.css'

class NewReleases extends Component{
    state={newReleasesList:[]}

    componentDidMount(){
        this.getNewRealeses()
    }

    getNewRealeses=async()=>{
        const apiUrl="https://api.itbook.store/1.0/new"
        const options={
            method:'GET'
        }
        const responses=await fetch(apiUrl,options)
        const data=await responses.json()
        this.setState({newReleasesList:data.books})

    }
    render(){
        const {newReleasesList}=this.state 
        return(
            <div>
                <ReactSlicker newReleases={newReleasesList}/>
            </div>
            
        )
    }
}

export default NewReleases