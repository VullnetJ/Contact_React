import React, { Component } from "react";
import Contact from './Contact';


class Contacts extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        {
          id: 1,
          name: "John Doe",
          email: "jdoe@gmail.com",
          phone: "555-555-5555",
        },
        {
          id: 2,
          name: "William Smith",
          email: "wills@gmail.com",
          phone: "444-444-5555",
        },
        {
          id: 3,
          name: "Rona Rown ",
          email: "rona@gmail.com",
          phone: "333-333-5555",
        },
      ],
    };
  }

  render() {
    const { contacts } = this.state;

    return (
      <div>
          {contacts.map(contact => (
            <Contact 
                name={contact.name} 
                email={contact.email} 
                phone={contact.phone}
                />
        ))}</div>
    );
  }
}
export default Contacts;
