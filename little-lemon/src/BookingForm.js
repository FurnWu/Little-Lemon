import { useState } from "react";
import {Counter} from "./BookingPage"
import { fetchAPI } from "./DataAPI";
//['17:00', '18:00', '19:00', '20:00', '21:00', '22:00' ]
 function BookingForm() {

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
      //return fetchAPI(date);
      
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
   <select id="res-time " value={chosenTime} onChange={(e) => setChosenTime(e.target.value)}>
      {listDefaultTime}
     
      
      
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