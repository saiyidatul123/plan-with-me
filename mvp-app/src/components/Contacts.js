import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contacts.css";

const Contacts = () => {
  let [contacts, setContacts] = useState([]);
  let [input, setInput] = useState({});

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = () => {
    fetch("/contacts")
      .then((response) => response.json())
      .then((contacts) => {
        setContacts(contacts);
        console.log(contacts);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (event) => {
    const value = event.target.value;
    setInput({ ...input, [event.target.name]: value });
  };

  const addContact = () => {
    fetch("/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(input),
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts([
          ...contacts,
          { // to make the web load faster
            id: data[data.length - 1].id,
            name: input.name,
            phone: input.phone,
            birthday: input.birthday,
          },
        ]);
      })
  };

  const deleteContact = (id) => {
    fetch(`/contacts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // setContacts(events.filter(e => e.id !== id))
        setContacts(data);
      })
      .catch((err) => console.log(err));
  };

  const handleSubmit = event => {
    event.preventDefault();
    addContact();
    setInput({ name: "", phone: "", birthday: ""}); // if you want empty input box after submit
  };

  return (
    <div className="contacts">
      <div className="d-flex">
        <div className="side-b">
          <img src="https://user-images.githubusercontent.com/86279819/131229738-08430096-eaab-4bf3-9e3a-8cdbfd465332.png" />
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="col-sm">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                value={input.name}
                onChange={(e) => handleChange(e)}
              />
              <br />
              <input
                type="text"
                name="phone"
                className="form-control"
                placeholder="Phone number"
                value={input.phone}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <input
                type="text"
                name="birthday"
                className="form-control"
                placeholder="Birthday(Month-Day)"
                value={input.birthday}
                onChange={(e) => handleChange(e)}
              />
              <br></br>
              <div className="text-center">
              <button className="btn btn-warning">
                ADD CONTACT
              </button>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-list">
          {contacts.map((e) => (
            <div className="cont">
              <p>Name: {e.name}</p>
              <p>Phone number:{e.phone}</p>
              <p>Birthday:{e.birthday}</p>
              <button onClick={() => deleteContact(e.id)}>delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contacts;
