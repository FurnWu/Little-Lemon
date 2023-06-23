import { useState } from "react";

function BookingForm() {
    
    return(
<form style={{display: "grid; max-width: 200px; gap: 20px"}}>
<div className= "date">
    <label htmlForfor="res-date">Choose date</label>
   <input type="date" id="res-date" />
</div>
   
<div className="time">
    <label htmlFor="res-time">Choose time</label>
   <select id="res-time ">
      <option>17:00</option>
      <option>18:00</option>
      <option>19:00</option>
      <option>20:00</option>
      <option>21:00</option>
      <option>22:00</option>
   </select>
</div>
   
<div className="guest">
    <label htmlFor="guests">Number of guests</label>
    <input type="number" placeholder="1" min="1" max="10" id="guests" />
</div>
   <div className="occasion">
    <label htmlFor="occasion">Occasion</label>
   <select id="occasion">
      <option>Birthday</option>
      <option>Anniversary</option>
      <option>Other</option>
   </select>
   </div>
   
   <input type="submit" value="Make Your reservation" />
</form>
     
      

    );
    };



    export default BookingForm;