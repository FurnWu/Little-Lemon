import { useState } from "react";
import {Counter} from "./BookingPage"
import { fetchAPI } from "./DataAPI";

 function BookingForm() {

   const [formData, setFormData] = useState({firstName: "", lastName: "",email: "",phone: "",message: ""});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
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
      e.preventDefault();}
 
console.log(date);
console.log(chosenTime);
console.log(guests);
console.log(occasion);

    return(
<div><form style={{display: "grid; max-width: 200px; gap: 20px" }}>
<div className="fullname">
   <div className="firstname"><label htmlFor="firstName">First Name:</label><br></br>
   <input type="text" id="firstName" name="firstName" placeholder="Your first name ..." value={formData.firstName} onChange={handleChange}/></div>
   <div className="lastname"><label htmlFor="lasttName">Last Name:</label><br></br>
   <input type="text" id="lastName" name="lastName" placeholder="Your last name ..." value={formData.lastName} onChange={handleChange}/></div>
</div>
<br></br>
<div className="contactInfo">
   <div className="phonenumber"><label htmlFor="phone">Phone Number:</label><br></br>
      <input type="tel" id="phone" name="phone" pattern="([0-9]{3})[0-9]{3}-[0-9]{4}" placeholder="(xxx) xxx-xxxx"  value={formData.phone} onChange={handleChange}/></div>

   <div className="email"><label htmlFor="email">Email:</label><br></br>
      <input type="email" id="email" name="email" value={formData.email} placeholder="example@mail.com" onChange={handleChange}/></div>
</div>

<br></br>
<div className="reservation1">
   <div className= "date">
    <label htmlForfor="res-date">Date</label><br></br>
   <input
         type="date"
         
         id="res-date"
         value={date}
         onChange={handleDateChange}/>
</div>

<br></br>
<div className="time">
    <label htmlFor="res-time">Time</label><br></br>
   <select id="res-time " value={chosenTime} onChange={(e) => setChosenTime(e.target.value)}>
      {listDefaultTime}
     
      
      
   </select>
   
</div>
<br></br>
   </div>
<div className="reservation2">
<div className="guest" >
    <label htmlFor="guests">Number of guests</label><br></br>
    <input type="number" placeholder="1" min="1" max="10" id="guests"
           value = {guests} onChange={(e) => setGuests(e.target.value)}   />
</div>
   
<div className="occasion">
    <label htmlFor ="occasion">Occasion</label><br></br>
   <select id ="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
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
   <label htmlFor="message">Message:</label>
      <textarea id="message" name="message" value={formData.message} onChange={handleChange}/>
   <br></br>
   <input type="submit" value="Make Your reservation" onSubmit={handleSubmit} />
   <br></br>
</form>
<br></br>
      <Counter />
      
</div>




    );


    };


    export default BookingForm;