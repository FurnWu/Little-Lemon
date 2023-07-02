import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "./DataAPI";

let defaultTime = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00' ]
const listDefaultTime = defaultTime.map(time => <option>{time}</option>)



function updateTimes(state, action) {
  switch(action.type) {
    case 'initialTimes': {
      return {times : fetchAPI()};
    }
    case 'incremented_age': {
      return {age: state.age + 1}
    }
    default: {throw Error('Unknown action.');}
  }
    
    
  }
  
  export function Counter() {
    const [availableTimes, dispatch] = useReducer(updateTimes, { age: 42 });
  
    return (
      <>
        <button onClick={() => {
          dispatch({ type: 'incremented_age' })
        }}>
          Increment age
        </button>
        <p>Hello! You are {availableTimes.age}.</p>
      </>
    );
  }
  


export function Booking() {

    return(
        <div>
            <h1>Reservations</h1>
            <BookingForm />
            
        </div>
        
    );
    };
    


