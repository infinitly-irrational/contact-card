import React, { Component } from "react";
import Person from "./Person";
import "./index.css";
import "./App.css";

class ContactCard extends Component {
  person1 = {
    name: "Carl Marks",
    mobile: "123-456-7890",
    email: "cmarks@gmail.com",
  };
  person2 = {
    name: "Julius Caesar",
    mobile: "465-732-9972",
    email: "jcaesar@gmail.com",
  };
  person3 = {
    name: "John Titor",
    mobile: "917-463-9241",
    email: "jtitor@gmail.com",
  };
  render() {
    return (
      <div className="Container">
        <h1 style={{ fontSize: "50px", fontFamily: "cursive" }}>Contacts</h1>
        <div>
          <Person
            name={this.person1.name}
            mobile={this.person1.mobile}
            email={this.person1.email}
          />
        </div>
        <br />
        <br />

        <div>
          <Person
            name={this.person2.name}
            mobile={this.person2.mobile}
            email={this.person2.email}
          />
        </div>
        <br />
        <br />
        <div>
          <Person
            name={this.person3.name}
            mobile={this.person3.mobile}
            email={this.person3.email}
          />
        </div>
      </div>
    );
  }
}

export default ContactCard;
