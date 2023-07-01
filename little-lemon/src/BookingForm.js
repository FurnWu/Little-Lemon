import { useState } from "react";
import {Counter} from "./BookingPage"

 function BookingForm() {
    const[date, setDate] = useState("")
    
    const[guests, setGuests] = useState("1")
    const[occasion, setOccasion] = useState("")

    const handleSubmit = (e) => {
      e.preventDefault();}

    return(
<div><form style={{display: "grid; max-width: 200px; gap: 20px"}}>

<div className= "date">
    <label htmlForfor="res-date">Choose date</label>
   <input
         type="date"
         id="res-date"
         value={date}
         onChange={(e) => setDate(e.target.value)}/>

</div>

<div className="time">
    <label htmlFor="res-time">Choose time</label>
   <select id="res-time " >
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
   
</div>

<div className="guest" >
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests"
           value = {guests} onChange={(e) => setGuests(e.target.value)}   />

</div>

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
   
   <input type="submit" value="Make Your reservation" onSubmit={handleSubmit} />
   
</form>
      <Counter />
</div>

     
      

    );
    };

    export default BookingForm;