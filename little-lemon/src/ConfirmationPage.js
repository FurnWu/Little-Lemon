import {SiCachet} from "react-icons/si";
import {Link} from 'react-router-dom';

export default function ConfirmPage() {
    return (
    <div style={{paddingTop:"5.5rem", paddingBottom:"3rem"}}>
    <h1 style={{fontSize:"50px"}}>Reservation Confirmed!</h1>
    
    <h1 style={{color:"green"}}><SiCachet /></h1><br></br>
    <div >
        <h2 style={{textAlign:"center", color:"#495E57"}}>Your Resservation ID</h2>
        <h2 style={{textAlign:"center"}}>"LMC017XX"</h2>
    </div>
    <div style={{fontFamily:"Karla"}}>
        <h3 style={{color:"#495E57"}}>We will notify you in advance.</h3>
        <h3>Hope to see you soon !</h3>
    </div>
    <Link to="/" style={{ textDecoration: 'none' }}>
    <button className="confirm-button">Back to Home</button>
    </Link>
   </div>
    )
};