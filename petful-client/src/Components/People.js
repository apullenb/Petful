import React, { useEffect, useState } from 'react';
import config from '../config'
import { Link } from "react-router-dom";

function People(props) {
       const dog = props.pet.dog
       const cat = props.pet.cat
        const currUser = props.user
    const [people, setPeople] = useState('Loading')
  
    async function getPeople() {
        try {
          const response = await fetch(`${config.API_ENDPOINT}/people`);
          const parseRes = await response.json(); 
          setPeople(parseRes)
          
    } catch (error) {
        console.error(error.message);
      }
    }
   
    useEffect(() => {
        getPeople();
        let countdown =  setInterval(() => {
           addToQueue();     
        }, 5000);
        return () => {
            clearInterval(countdown)
        }
     }, []);
  
     function addToQueue() {
        let peopleNames = [
            "John Jacob",
            "Hugh Jackman",
             "Mr. Peabody",
             "Zac Effron",
           "Leonardo DiCaprio",
           "Hulk Hogan",
           "Britney Spears",
           "Steven Jacob",
           "Jennifer Aniston",
           "Johnny Depp",
           "Jessica Biel",
           "Liam Hemsworth",
           "Malibu Barbie"
        ];
       
          let index = Math.floor(Math.random()* people.length)
          let person = peopleNames[index];

          fetch(`${config.API_ENDPOINT}/people`, {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify({ person }),
          })
          .then(fetch(`${config.API_ENDPOINT}/people`, {
            method: "DELETE",
            headers: {
              "content-type": "application/json",
            }
        }))
            .then(getPeople())
        }
  function adoptNow() {
    if (people[0] === currUser) {
        return <div className='adopt'>
            <h2>{currUser},</h2>
            <h2>Ready to Adopt?</h2>
            <Link
            to={{ pathname: "/Confirmation", state: cat}}><button> Adopt Cat Now! </button></Link>
              <Link
            to={{ pathname: "/Confirmation", state: dog}}><button> Adopt Dog Now! </button></Link>
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
        </div>
    )
    }

export default People
