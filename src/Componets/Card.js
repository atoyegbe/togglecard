import React from 'react';
import styles from '../modules/button.module.css';
import './Card.css'

const Card = (props) => {
  return (
     <div className={props.className}>
       <p>Name: {props.name} </p>
       <hr></hr>
       <p>Age: {props.age} </p>
       <hr></hr>
       <p>
         About:
           {/* {props.children} */}
       </p>
       <button className={styles.normal} onClick={props.click}> Delete </button>
     </div>
  )
}

export default Card;