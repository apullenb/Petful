import React, { useEffect, useState } from 'react';
import config from '../config'

function People() {
   
    const [people, setPeople] = useState('Loading')
  
    async function getPeople() {
        try {
          const response = await fetch(`${config.API_ENDPOINT}/people`);
          const parseRes = await response.json();  
          setPeople(parseRes)
          console.log(people)
    } catch (error) {
        console.error(error.message);
      }
    }
    useEffect(() => {
        getPeople();
      }, []);

    return (
        <div>
            
        </div>
    )
}

export default People
