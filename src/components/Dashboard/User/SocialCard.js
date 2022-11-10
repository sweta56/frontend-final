
import './SocialCard.css';
import { Link } from "react-router-dom";
import logo from "../../../assets/user-logo.png"

const SocialCard = ({ userData }) => {
    return (
        <div className="card">
            <div className="card__title">{userData.username}</div>
            <div className="card__body">
               <h1>Email:</h1>{userData.email}
               <br/> 
              <h2> NMC number: {userData.nmcc}</h2> 
                <div className="card__image"><img src={logo}/></div>
                
                <Link to="/form">
                     <button>Book Appointment</button>
                </Link>
            </div>

        </div>
    )
};

export default SocialCard;