import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <div>
        <Card
          name={contacts[0].name}
          imgURL={contacts[0].imgURL}
          tel={contacts[0].phone}
          email={contacts[0].email}
        />
      </div>
      <div>
        <Card
          name={contacts[1].name}
          imgURL={contacts[1].imgURL}
          tel={contacts[1].phone}
          email={contacts[1].email}
        />
      </div>
      <div>
        <Card
          name={contacts[2].name}
          imgURL={contacts[2].imgURL}
          tel={contacts[2].phone}
          email={contacts[2].email}
        />
      </div>
    </div>
  );
}

export default App;
