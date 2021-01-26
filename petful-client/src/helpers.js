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
       "Malibu Barbie",
       "Johnny Cash",
       "Steve Tyler",
       "Mary Tyler Moore",
       "Jessica Simpson",
       "Drew Barrymore"
    ];
    let math = (Math.random() * Math.random() * Math.random()) * 100 
    if(math > 18){
      math = math / 10
    }  
    let index = Math.round(math + 0.2 + 0.5)
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


export const getPeople = async function () {
  try {
    const response = await fetch(`${config.API_ENDPOINT}/people`);
    const parseRes = await response.json(); 
  
    return parseRes
    
} catch (error) {
  console.error(error.message);
}
}

export const getPets = async function() {
try {
  const response = await fetch(`${config.API_ENDPOINT}/pets`);
  const parseRes = await response.json();
  return parseRes
} catch (error) {
console.error(error.message);
}
}
