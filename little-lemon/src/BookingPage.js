import BookingForm from "./BookingForm";
import { useReducer } from "react";

function updateTimes(availableTimes, action) {
    if (action.type === 'incremented_age') {
      return {
        age: availableTimes.age + 1
      };
    }
    throw Error('Unknown action.');
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
    


