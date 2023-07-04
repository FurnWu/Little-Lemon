import { useState } from "react";

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

   var curr = new Date();
curr.setDate(curr.getDate());
var dfaultDate = curr.toISOString().substring(0,10);

    const[date, setDate] = useState(dfaultDate)
    const[chosenTime, setChosenTime] = useState("")
   let defaultTime = fetchAPI(date)
    const listDefaultTime = defaultTime.map(time => <option>{time}</option>)
   
    


    const[guests, setGuests] = useState("1")
    const[occasion, setOccasion] = useState("")
   
   const handleDateChange = (e) => {
      setDate(e.target.value);
      
      
   }
   //console.log(fetchAPI(date));
    const handleSubmit = (e) => {
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
   <div className="firstname"><label htmlFor="firstName">First Name:</label><br></br>
   <input type="text" id="firstName" name="firstName" 
            disabled={isDisabled} 
            placeholder="Your first name ..." 
            value={formData.firstName} 
            onChange={handleChange}
            required />
            {inputError && <div style={{ color: 'red' }}>{inputError}</div>}
   </div>
   <div className="lastname"><label htmlFor="lasttName">Last Name:</label><br></br>
   <input type="text" id="lastName" name="lastName" disabled={isDisabled} placeholder="Your last name ..." value={formData.lastName} onChange={handleChange}/></div>
</div>
<br></br>
<div className="contactInfo">
   <div className="phonenumber"><label htmlFor="phone">Phone Number:</label><br></br>
      <input type="tel" id="phone" name="phone" disabled={isDisabled} pattern="[0-9]{10}" placeholder="Enter your phone number"  value={formData.phone} onChange={handleChange}/></div>

   <div className="email"><label htmlFor="email">Email:</label><br></br>
      <input type="email" id="email" name="email" disabled={isDisabled} value={formData.email} placeholder="example@mail.com" onChange={handleChange}/></div>
</div>

<br></br>
<div className="reservation1">
   <div className= "date">
    <label htmlForfor="res-date">Date</label><br></br>
   <input
         type="date"
         disabled={isDisabled}
         id="res-date"
         value={date}
         onChange={handleDateChange}/>
</div>

<br></br>
<div className="time">
    <label htmlFor="res-time">Time</label><br></br>
   <select id="res-time " disabled={isDisabled} value={chosenTime} onChange={(e) => setChosenTime(e.target.value)}>
      {listDefaultTime}
     
      
      
   </select>
   
</div>
<br></br>
   </div>
<div className="reservation2">
<div className="guest" >
    <label htmlFor="guests">Number of guests</label><br></br>
    <input type="number" placeholder="1" min="1" max="12" id="guests" disabled={isDisabled}
           value = {guests}  onChange={(e) => setGuests(e.target.value)}   />
</div>
   
<div className="occasion">
    <label htmlFor ="occasion">Occasion</label><br></br>
   <select id ="occasion" disabled={isDisabled} value={occasion} onChange={(e) => setOccasion(e.target.value)}>
   <optgroup label="Choose you occasion">
      <option hidden="true">In what occasion?</option>
      <option>Eat and Chill</option>
      <option>Friends/Family Reuion</option>
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Engagement</option>
      <option>Other</option>
   </optgroup>
      
   </select>
   </div>
</div>

<br></br>
   <div className="textbox">
      <label htmlFor="message">Message:</label><br></br>
      <textarea id="message" name="message" disabled={isDisabled} value={formData.message} onChange={handleChange}/>
   <br></br>
   
   </div>
   <input type="submit" value="Make Your reservation"  onSubmit={handleSubmit} /> 
   <br></br>
   <button onClick={handleSubmitClick}>Submit</button>
   <button onClick={handleEditClick}>Edit</button>
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