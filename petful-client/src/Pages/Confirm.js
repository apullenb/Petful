import React from 'react'

function Confirm(props) {
    let pet = props.location.state
    localStorage.setItem('token', pet.name);
    return (
        <div className='confirm'>
           <h2>Congratulations!</h2>
           <h3>You Adopted:</h3>
           <h4>{pet.name}</h4>
           <img src= {pet.imageURL} />
        </div>
    )
}

export default Confirm
