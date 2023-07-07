import { useState } from "react";
import { validateEmail } from "./utils";
import { fetchAPI } from "./DataAPI";

 function BookingForm() {
   const [isDisabled, setIsDisabled] = useState(false);
   const [formData, setFormData] = useState({firstName: "", lastName: "",email: "",phone: "",message: ""});
   const [inputError, setInputError] = useState(null);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    if (value.length < 5) {
      setInputError('Input must be at least 2 characters');
    } else {
      setInputError(null);
    }
  };
  const getIsFormValid = () => {
   return (
     formData.firstName &&
     formData.lastName &&
     formData.phone &&
     validateEmail(formData.email) &&
     occasion !== "F"
   );
 };
var curr = new Date();
curr.setDate(curr.getDate());
var dfaultDate = curr.toISOString().substring(0,10);

    const[date, setDate] = useState(dfaultDate)
    const[chosenTime, setChosenTime] = useState("")
   let defaultTime = fetchAPI(date)
    const listDefaultTime = defaultTime.map(time => <option>{time}</option>)
   
    


    const[guests, setGuests] = useState("1")
    const[occasion, setOccasion] = useState("F")
   
   const handleDateChange = (e) => {
      setDate(e.target.value);
      
      
   }
   //console.log(fetchAPI(date));
    const handleSubmit = (e) => {
      setIsDisabled(true)
      e.preventDefault();
      
   }
console.log(formData);
   const handleSubmitClick = (e) => {
      setIsDisabled(true)
      e.preventDefault();
   }

   const handleEditClick = (e) => {
      setIsDisabled(false)
      e.preventDefault();
   }
 
console.log(date);
console.log(chosenTime);
console.log(guests);
console.log(occasion);

    return(
<div><form style={{display: "grid; max-width: 200px; gap: 20px" }}>
<div className="fullname">
   <div className="firstname"><label htmlFor="firstName">First Name<sup>*</sup></label><br></br>
   <input type="text" id="firstName" name="firstName" 
            disabled={isDisabled} 
            placeholder="Your first name ..." 
            value={formData.firstName} 
            onChange={handleChange}
            required />
            {inputError && <div style={{ color: 'red', fontSize: '12px' }}>{inputError}</div>}
   </div>
   <div className="lastname"><label htmlFor="lasttName">Last Name<sup>*</sup></label><br></br>
   <input type="text" id="lastName" name="lastName" disabled={isDisabled} placeholder="Your last name ..." value={formData.lastName} onChange={handleChange} required/>
      {inputError && <div style={{ color: 'red', fontSize: '12px' }}>{inputError}</div>}
   </div>
</div>
<br></br>
<div className="contactInfo">
   <div className="phonenumber"><label htmlFor="phone">Phone Number<sup>*</sup></label><br></br>
      <input type="tel" id="phone" name="phone" disabled={isDisabled} pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="xxx-xxx-xxxx"  value={formData.phone} onChange={handleChange} required/></div>

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
      {listDefaultTime}
   </select>
</div>


<br></br>
   </div>
<div className="reservation2">
   <div className="occasion">
    <label htmlFor ="occasion">Occasion<sup>*</sup></label><br></br>
   <select id ="occasion" disabled={isDisabled} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
   <optgroup label="Choose you occasion">
      <option hidden="true" value="F">In what occasion?</option>
      <option value="A">Eat and Chill</option>
      <option value="B">Friends/Family Reuion</option>
      <option value="C">Birthday</option>
      <option value="D">Anniversary</option>
      <option value="E">Engagement</option>
      <option value="G">Other</option>
   </optgroup>
   </select>
   </div>


<div className="guest" >
    <label htmlFor="guests">Number of guests<sup>*</sup></label><br></br>
    <input type="number" placeholder="1" min="1" max="12" id="guests" disabled={isDisabled}
           value = {guests}  onChange={(e) => setGuests(e.target.value)}   />
</div>
   

</div>

<br></br>
   <div className="textbox">
      <label htmlFor="message">Message</label><br></br>
      <textarea id="message" name="message" placeholder="Additional request..." disabled={isDisabled} value={formData.message} onChange={handleChange}/>
   <br></br>
   </div>

   <input type="submit" value="Make Your reservation" onSubmit={handleSubmit} /> 
   <br></br>
   <button onClick={handleSubmitClick}>Submit</button>
   <button onClick={handleEditClick}>Edit</button>
   <button onSubmit={handleSubmit} disabled={!getIsFormValid()} >Book Now</button>
</form>
<br></br>
      
      <Confirmation />
</div>
 );

function Confirmation() {
   if (isDisabled)
{return (
   <div>
      <p>{formData.firstName}</p>
      <p>{date}</p>
      
      
   </div>
)
}

};
    };


    export default BookingForm;