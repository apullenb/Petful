import React, { useEffect, useState } from 'react';
import config from '../config'
import { Link } from "react-router-dom";

function People(props) {
       const dog = props.pet.dog
       const cat = props.pet.cat
       const people = props.people
        const currUser = props.user
   
       
    
  function adoptNow() {
    if (people[0] === currUser) {
      console.log('made it to adopt')
      clearInterval(1)
        return <div className='adopt'>
            <h2>{currUser},</h2>
            <h2>Ready to Adopt?</h2>
            <Link
            to={{ pathname: "/Confirmation", state: [cat, currUser], }}><button> Adopt Cat Now! </button></Link>
              <Link
            to={{ pathname: "/Confirmation", state: [dog, currUser] }}><button> Adopt Dog Now! </button></Link>
            </div>
    }
    if (people[1] === currUser){
        return <h3 style={{color:'red'}}>You Are Next In Line</h3>
    } else {
    return;
    }
  }

        
    return (
        <div>
            <section>
            <h2>Next in Line:</h2>
            <h3> {people[0]}</h3>
            {adoptNow()}
            <p>{people[1]}</p>
            </section>
           <section>
            <h4>Waiting List:</h4>
           <p>{people[2]}</p>
           <p>{people[3]}</p>
           <p>{people[4]}</p>
           <p>{people[5]}</p>
           </section>
           <h4>Total People In Line: </h4>
           <h3 style={{color:'red'}}>{people.length}</h3>
        </div>
    )
    }

export default People
