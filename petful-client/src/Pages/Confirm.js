import React from 'react'
import {deleteCat, deleteDog, deletePerson} from "../helpers";

function Confirm(props) {
    let pet = props.location.state[0]
    let user = props.location.state[1]
    console.log(props.location.state)

    if(props.location.state[2] === 'cat') {
        deleteCat()
    } 
    if (props.location.state[2] === 'dog') {
        deleteDog()
    }
    
    return (
        <div className='confirm'>
           <h2>Congratulations, {user}!</h2>
           <h3>You Adopted:</h3>
           <h4>{pet.name}</h4>
           <img src= {pet.imageURL} />
        </div>
    )
}

export default Confirm
