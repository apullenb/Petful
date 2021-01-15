import config from './config';

export const deleteCat = () => {
    fetch(`${config.API_ENDPOINT}/pets/cat`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        }    
      }) 
}
export const addPerson = () => {
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
    let math = Math.random() * 10 -1
      let index = Math.round(math)
      let person = peopleNames[index];
      console.log(index, person, math)
    fetch(`${config.API_ENDPOINT}/people`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({ person }),
      })
}
export const deletePerson = () => {
    fetch(`${config.API_ENDPOINT}/people`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        }
    })
}
export const deleteDog =() => {
    fetch(`${config.API_ENDPOINT}/pets/dog`, {
        method: "DELETE",
        headers: {
          "content-type": "application/json",
        },
      })
}



