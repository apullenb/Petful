import React, { useEffect, useState } from 'react';
import config from '../config'
import { addPerson, deleteCat, deleteDog, deletePerson } from '../helpers';
import People from './People'
import WaitingList from './WaitingList';

function Adoption() {

    
    const [dogs, setDogs] = useState('Loading')
    const [cats, setCats] = useState('Loading')
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
    async function getPets() {
      try {
        const response = await fetch(`${config.API_ENDPOINT}/pets`);
        const parseRes = await response.json();
        setCats(parseRes.cat[0]);
        setDogs(parseRes.dog[0])
  } catch (error) {
      console.error(error.message);
    }
  }
   
    useEffect(() => {
       getPets()
       getPeople()
       let countdown = setInterval(petAdopted, 6000);
       return () => {
        clearInterval(countdown)
    }
      }, []);
     
      
      
     function petAdopted (){
      let type = Math.floor(Math.random() * 8.3)
      
        if (type > 3) {
          deleteCat()
          deletePerson()
          addPerson()
          getPeople()
         getPets()
        } else {
        deleteDog()
        deletePerson()
        addPerson()
        getPeople()
          getPets()
        }
        
      };
    
    return (
      <div>
        <div className ='pets'>
             <section className='petcard'>
            <h3 className='name'>Name: {cats[0].name} </h3>
            <section className='info'>
            <img src= {cats[0].imageURL} />
            <div>
            <p>Age: {cats[0].age}</p>
            <p>Breed: {cats[0].breed}</p>
            <p>Gender: {cats[0].gender}</p>
            <p>My Story: {cats[0].story}</p>
            </div>
            </section>
            </section>
            <section className='petcard'>
            <h3 className='name'>Name: {dogs[0].name} </h3>
            <section className='info'>
            <img src= {dogs[0].imageURL} />
            <div>
            <p>Age: {dogs[0].age}</p>
            <p>Breed: {dogs[0].breed}</p>
            <p>Gender: {dogs[0].gender}</p>
            <p>My Story: {dogs[0].story}</p>
            </div>

            </section>
            </section>
        </div>
        <WaitingList dog={dogs[0]} cat={cats[0]} people={people}/>
     
        </div>
    )
}

export default Adoption
