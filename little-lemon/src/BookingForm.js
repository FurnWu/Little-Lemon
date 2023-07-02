import { useState } from "react";
import {Counter} from "./BookingPage"
import { fetchAPI } from "./DataAPI";

 function BookingForm() {
    const[date, setDate] = useState("")

    const[guests, setGuests] = useState("1")
    const[occasion, setOccasion] = useState("")
   
   const handleDateChange = (e) => {
      setDate(e.target.value);
      return fetchAPI(date);
      
   }
   console.log(fetchAPI(date));
    const handleSubmit = (e) => {
      e.preventDefault();}

    return(
<div><form style={{display: "grid; max-width: 200px; gap: 20px" }}>
<br></br>
<div className= "date">
    <label htmlForfor="res-date">Choose date</label>
   <input
         type="date"
         id="res-date"
         value={date}
         onChange={handleDateChange}/>

</div>
<br></br>
<div className="time">
    <label htmlFor="res-time">Choose time</label>
   <select id="res-time ">
      <option>00:00</option>
     
      
      
   </select>
   
</div>
<br></br>
<div className="guest" >
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests"
           value = {guests} onChange={(e) => setGuests(e.target.value)}   />

</div>
<br></br>
   <div className="occasion">
    <label htmlFor ="occasion">Occasion</label>
   <select id ="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Engagement</option>
      <option>Just chill and eat</option>
      <option>Other</option>
   </select>
   </div>
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