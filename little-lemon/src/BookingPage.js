import BookingForm from "./BookingForm";
//import { useReducer } from "react";
//import { fetchAPI } from "./DataAPI";




/*function updateTimes(state, action) {
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
  }*/
  


export function Booking() {

    return(
        <div style={{backgroundColor:"#495E57", paddingTop:"5.2rem"}}>
            <h1 style={{color:"#F4CE14"}}>Reservations</h1>
            
            <BookingForm />
            
        </div>
        
    );
    };
    


