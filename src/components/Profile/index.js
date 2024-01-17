import Header from '../Header'
import Footer from '../Footer'
import './index.css'

const Profile=(props)=>{
    const formSubmit=event=>{
        event.preventDefault()
        const {history}=props 
        history.replace('/')
    }
    return(
        <>
        <Header/>
        <div className='profile-container'>
            <h1>Welcome to the,<span className='spanned-heading'> Book Store</span></h1>
            <form onSubmit={formSubmit}>
                <label htmlFor='name'>Enter Name</label>
                <input type='text' placeholder='Enter your name' id='name'/>
                <label htmlFor='email'>Enter your Email</label>
                <input type='email' placeholder='Email id' id='email'/>
                <label htmlFor='password'>Enter your Password</label>
                <input type='password' placeholder='Enter your password' id='password'/>
                <label htmlFor='dob'>Date of Birth</label>
                <input type='date' placeholder='DD/MM/YYYY' id='dob'/>
                <button type='submit' className='sign-up-btn'>Sign me Up</button>
            </form>
        </div>
        <Footer/>
        </>
    )
}
export default Profile