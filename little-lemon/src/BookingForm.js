import { useState, useRef} from "react";
import { validateEmail } from "./utils";
import { fetchAPI } from "./DataAPI";
import {VscWarning} from "react-icons/vsc";
import {Link} from 'react-router-dom';
import './Styling/BookingForm.css'
 function BookingForm() {
   
   const hen = useRef(null);
   const [isDisabled, setIsDisabled] = useState(false);
   const [formData, setFormData] = useState({firstName: "", lastName: "",email: "",phone: "",message: ""});
   const [inputError, setInputError] = useState(null);
   const [inputPhoneError, setInputPhoneError] = useState(null);

   const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      
    if (value.length < 2) {
      setInputError('Input must be at least 2 characters');
    } else {
      setInputError(null);
    }
  };

  const handleValidPhoneNumber = (event) => {
   const { name, value } = event.target;
   setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));

   if (value.length !== 10) {
     setInputPhoneError('Phone number must be 10 digits');
   }
   else {
     setInputPhoneError(null);
   }
 };

  const getIsFormValid = () => {
   return (
     formData.firstName &&
     formData.lastName &&
     formData.phone &&
     validateEmail(formData.email) &&
     occasion !== "F" &&
     chosenTime !== "T"
   );
 };
var curr = new Date();
curr.setDate(curr.getDate());
//var dfaultDate = curr.toISOString().substring(0,10);

    const[date, setDate] = useState("");
    const[chosenTime, setChosenTime] = useState("T")
    let defaultTime = fetchAPI(date)
    const listDefaultTime = defaultTime.map(time => <option>{time}</option>)
    const[guests, setGuests] = useState("1")
    const[occasion, setOccasion] = useState("F")

    /*const clearForm = () => {
      setFormData({firstName: "", lastName: "",email: "",phone: "",message: ""});
      setDate(dfaultDate);
      setChosenTime("");
      setGuests("1");
      setOccasion("F");
    };*/

   const handleDateChange = (e) => {
      setDate(e.target.value);
   }
   //console.log(fetchAPI(date));
    const handleSubmit = (e) => {
      e.preventDefault();
      setIsDisabled(true);
      alert("Make your reservation now!");
      
      //myFunction();
      //clearForm();
   }
   console.log(isDisabled);
   console.log(formData);

   /*const handleSubmitClick = (e) => {
      setIsDisabled(true)
      e.preventDefault();
   }*/

   const handleEditClick = (e) => {
      setIsDisabled(false);
      
      e.preventDefault();
   }
 
console.log(date);
console.log(chosenTime);
console.log(guests);
console.log(occasion);

    return(
<div style={{backgroundColor:"#495E57", paddingTop:"5.2rem"}}>
<h1 style={{color:"#F4CE14"}}>Reservations</h1>
   <form style={{display: "grid; max-width: 200px; gap: 20px" }} onSubmit={handleSubmit}>
<div className="fullname">
   <div className="firstname"><label htmlFor="firstName">First Name<sup>*</sup></label><br></br>
   <input type="text" id="firstName" name="firstName" 
            disabled={isDisabled} 
            placeholder="Your first name ..." 
            value={formData.firstName} 
            onChange={handleChange}
            required />
            {inputError && <div style={{ color: '#F4CE14', fontSize: '12px' }}><VscWarning/> {inputError}</div>}
   </div>
   <div className="lastname"><label htmlFor="lasttName">Last Name<sup>*</sup></label><br></br>
   <input type="text" id="lastName" name="lastName" disabled={isDisabled} placeholder="Your last name ..." value={formData.lastName} onChange={handleChange} required/>
      {inputError && <div style={{ color: '#F4CE14', fontSize: '12px' }}><VscWarning/> {inputError}</div>}
   </div>
</div>
<br></br>
<div className="contactInfo">
   <div className="phonenumber"><label htmlFor="phone">Phone Number<sup>*</sup></label><br></br>
      <input type="tel" id="phone" name="phone" disabled={isDisabled} pattern="[0-9]{10}" placeholder="10 digits phone number "  value={formData.phone} onChange={handleValidPhoneNumber} required/>
      {inputPhoneError && <div style={{ color: '#F4CE14', fontSize: '12px' }}><VscWarning/> {inputPhoneError}</div>}
      </div>
   <div className="email"><label htmlFor="email">Email<sup>*</sup></label><br></br>
      <input type="email" id="email" name="email" disabled={isDisabled} value={formData.email} placeholder="example@mail.com" onChange={handleChange} required/></div>
</div>

<br></br>
<div className="reservation1">
   <div className= "date">
    <label htmlForfor="res-date">Date<sup>*</sup></label><br></br>
   <input
         type="date"
         disabled={isDisabled}
         id="res-date"
         value={date}
         onChange={handleDateChange}/>
</div>
<div className="time">
    <label htmlFor="res-time">Time<sup>*</sup></label><br></br>
   <select id="res-time " disabled={isDisabled} value={chosenTime} onChange={(e) => setChosenTime(e.target.value)}>
      <optgroup label="Pick available time">
         <option hidden="true" value="T">Pick time</option>
         {listDefaultTime}</optgroup>
   </select>
</div>


<br></br>
   </div>
<div className="reservation2">
   <div className="occasion">
    <label htmlFor ="occasion">Occasion<sup>*</sup></label><br></br>
   <select id ="occasion" disabled={isDisabled} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
   <optgroup label="Choose your occasion">
      <option hidden="true" value="F">In what occasion?</option>
      <option value="Eat and Chill">Eat and Chill</option>
      <option value="Friends/Family Reuion">Friends/Family Reuion</option>
      <option value="Birthday">Birthday</option>
      <option value="Anniversary">Anniversary</option>
      <option value="Engagement">Engagement</option>
      <option value="Other">Other</option>
   </optgroup>
   </select>
   </div>


<div className="guest" >
    <label htmlFor="guests">Number of guests<sup>*</sup></label><br></br>
    <input type="number" placeholder="1" min="1" max="12" id="guests" disabled={isDisabled}
           value = {guests}  onChange={(e) => setGuests(e.target.value)}   />
</div>
</div>
<p style={{textAlign:"left", color: "#F4CE14", fontSize: "12px", marginLeft:"31.5rem"}}>* Required</p>

   <div className="textbox">
      <label htmlFor="message">Message</label><br></br>
      <textarea id="message" name="message" placeholder="Additional request..." disabled={isDisabled} value={formData.message} onChange={handleChange}/>
   <br></br>
   </div>
   {/*<input type="submit" value="Make Your reservation" onSubmit={handleSubmit} />*/}
   <br></br>
   {/*<button onClick={handleSubmitClick}>Submit</button>*/}
   <div className="form-button">
      
      <button onClick={() => hen.current.scrollIntoView({ behavior: "smooth", block: "end" })} className="booking-button" type="submit" onSubmit={handleSubmit} disabled={!getIsFormValid()} >Book Now!</button>
      
   </div>
   
</form>
<br></br>
<div ref={hen} >
  <Confirmation/> 
</div>

</div>
 );

function Confirmation() {
   if (isDisabled) {
   return (
   <div className="confirm" style={{backgroundColor:"white", textAlign:"left", paddingBlock:"2rem"}} >
      <h1 style={{textAlign:"center", paddingBottom:"1rem", color:"#333333"}}>Confirm reservation</h1>
      <div style={{backgroundColor:"white"}}>
         <h3 style={{display:"inline-flex"}}><div style={{width:"15rem", color:"#495E57"}}>NAME :</div>{formData.firstName}&nbsp;&nbsp;{formData.lastName}</h3><br></br>
         <h3 style={{display:"inline-flex"}}><div style={{width:"15rem", color:"#495E57"}}>DATE AND TIME :</div>{date}&nbsp;/&nbsp;&nbsp;{chosenTime}</h3><br></br>
         <h3 style={{display:"inline-flex"}}><div style={{width:"15rem", color:"#495E57"}}>NUMBER OF GUESTS :</div>{guests}</h3><br></br>
         <h3 style={{display:"inline-flex"}}><div style={{width:"15rem", color:"#495E57"}}>OCCASION :</div>{occasion}</h3><br></br>
         <h3 style={{display:"inline-flex"}}><div style={{width:"15rem", color:"#495E57"}}>ADDITIONAL REQUEST :</div>{formData.message}</h3><br></br>
         <h3 style={{display:"inline-flex"}}><div style={{width:"15rem", color:"#495E57"}}>PHONE NUMBER :</div>{formData.phone}</h3><br></br>
         <h3 style={{display:"inline-flex"}}><div style={{width:"15rem", color:"#495E57"}}>E-MAIL :</div>{formData.email}</h3><br></br> 
      </div>
      <div className="res-button">
         <button id="editbtn" className="edit-button" onClick={handleEditClick}>Edit</button>
         <Link to="/comfirm-reservation" style={{ textDecoration: 'none' }}>
         <button className="confirm-button">Confirm</button>
         </Link>
      </div>
      
   </div>
)
}

}


/*function myFunction() {
   const element = document.getElementById("confirm");
   element.scrollIntoView();
}*/
    };


    export default BookingForm;