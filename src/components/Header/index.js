import { Link,withRouter } from "react-router-dom";
import { TbLetterB } from "react-icons/tb";
import { FaUser,FaShoppingCart} from "react-icons/fa";
import './index.css'

const Header=()=>(
    <div className="header-container">
        <Link to="/" className="link-text">
        <div className="header-logo-container">
            <TbLetterB className="book-store-icon-word"/>
            <h1 className="header-title">Book Store</h1>
        </div>
        </Link>
        <div className="icons-container">
            <Link to="/profile">
                <FaUser className="header-right-icons"/>
            </Link>
            <Link to='/cart'>
                <FaShoppingCart className="header-right-icons"/>
            </Link>
        </div>
    </div>
)

export default withRouter(Header)