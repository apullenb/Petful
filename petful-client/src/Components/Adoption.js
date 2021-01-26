import React, { Component } from "react";
import config from "../config";
import MyContext from "../Context";
import {
  addPerson,
  deleteCat,
  deleteDog,
  deletePerson,
  getPeople,
  getPets,
} from "../helpers";
import People from "./People";
import WaitingList from "./WaitingList";

class Adoption extends React.Component {
  static contextType = MyContext;
 
  fetchAll() {
    getPeople().then((res) => this.context.setPeopleList(res));
    getPets()
      .then((res) => {
        this.context.setDogList(res.dog[0]);
        this.context.setCatList(res.cat[0]);
      })
      .then(() =>
        this.setState({
          currentCat: this.context.cats[0],
          currentDog: this.context.dogs[0],
        })
      );
  }

  componentDidMount() {
    this.fetchAll();
    this.interval = setInterval(() => {
      this.petAdopted();
    }, 5000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
  displayPetCard() {
    if (this.context.cats[0] !== undefined) {
      return <div className="pets">
      <div className="petcard">
        <h3 className="name">Name: {this.context.cats[0].name} </h3>
        <section className="info">
          <img src={this.context.cats[0].imageURL} />
          <div>
            <p>Age: {this.context.cats[0].age}</p>
            <p>Breed: {this.context.cats[0].breed}</p>
            <p>Gender: {this.context.cats[0].gender}</p>
            <p>My Story: {this.context.cats[0].story}</p>
          </div>
        </section>
      </div>
      <section className="petcard">
        <h3 className="name">Name: {this.context.dogs[0].name} </h3>
        <section className="info">
          <img src={this.context.dogs[0].imageURL} />
          <div>
            <p>Age: {this.context.dogs[0].age}</p>
            <p>Breed: {this.context.dogs[0].breed}</p>
            <p>Gender: {this.context.dogs[0].gender}</p>
            <p>My Story: {this.context.dogs[0].story}</p>
          </div>
        </section>
      </section>
    </div>
    } else {
      return <div>'Loading, Please Wait'</div>
    }
  }
  petAdopted() {
    let type = Math.floor(Math.random() * 8.3);
    if (type > 3) {
      deleteCat();
      deletePerson();
      addPerson();
      this.fetchAll();
    } else {
      deleteDog();
      deletePerson();
      addPerson();
      this.fetchAll();
    }
  }
  render() {
    return (
      <div>
       {this.displayPetCard()}
        <WaitingList
          dog={this.context.dogs[0]}
          cat={this.context.cats[0]}
          people={this.context.people}
          interval={this.interval}
        />
      </div>
    );
  }
}

export default Adoption;
