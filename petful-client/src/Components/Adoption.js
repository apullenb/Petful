import React, { useEffect, useState } from 'react';
import config from '../config'


function Adoption() {

    const [cats, setCats] = useState('Loading')
    const [dogs, setDogs] = useState('Loading')
    const [people, setPeople] = useState('Loading')
    const [type, setType] = useState('dog')
    async function getPets() {
        try {
          const response = await fetch(`${config.API_ENDPOINT}/pets`);
          const parseRes = await response.json();
          setCats(parseRes.cat);
          setDogs(parseRes.dog);
          const people = await fetch(`${config.API_ENDPOINT}/people`);
          const pepRes = await people.json();  
          setPeople(pepRes)
    } catch (error) {
        console.error(error.message);
      }
    }
    useEffect(() => {
        getPets();
      }, []);
    
      let countdown = setInterval(() => {
        if (people.length < 2) {
        //   addToQueue();    
          return clearInterval(countdown);
      }
        fetch(`${config.API_ENDPOINT}/pets/${type}`, {
          method: "DELETE",
          header: {
            "content-type": "application/json"}, 
          }) 
        .then(() => setType(type === 'dog' ? 'cat' : 'dog'))
        
       
      }, 10000);
    
    return (
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
            <button>Adopt Me!</button>
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
            <button>Adopt Me!</button>
            </section>
            </section>
        </div>
    )
}

export default Adoption
