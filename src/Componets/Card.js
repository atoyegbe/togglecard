import React from 'react';
import './Card.css'

const Card = (props) => {
  return (
     <div className="Card">
       <p>Name: {props.name} </p>
       <hr></hr>
       <p>Age: {props.age} </p>
       <hr></hr>
       <p>
         About:
           {/* {props.children} */}
       </p>
       <button onClick={props.click}> Delete </button>
     </div>
  )
}

export default Card;