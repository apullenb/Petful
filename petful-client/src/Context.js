import React, { Component } from 'react';
import { addPerson, deleteCat, deleteDog, deletePerson, getPeople, getPets } from './helpers';

const MyContext = React.createContext({
  cats: [],
  dogs: [],
  people: [],
  setDogList:()=>{ },
  setCatList:()=>{ },
  setPeopleList:()=> { },

})
export default MyContext

export class MyContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cats: [], 
      dogs: [], 
      people: 'Loading',
    };
   
  }

  setPeopleList = (people) => {
		this.setState({ 
      people: people
     });
};


setCatList = (cats) => {
  this.setState({cats})
  ;
};

setDogList = (dogs) => {
  this.setState({dogs});
};


render(){
  const value = {
    cats: this.state.cats,
    dogs: this.state.dogs,
    people: this.state.people,
    setDogList: this.setDogList,
    setCatList: this.setCatList,
    setPeopleList: this.setPeopleList,
  
  };

return(
  <MyContext.Provider value={value}>
  {this.props.children}
</MyContext.Provider>
  )
}
}