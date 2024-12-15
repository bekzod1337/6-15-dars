import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Main from "./Components/Index1"; 
import CreateContact from "./components/CreateContact"; 
import EditContact from "./components/EditContact"; 

function App() {
  const [contacts, setContacts] = useState([
    
  ]);

  const addContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const updateContact = (updatedContact) => {
    setContacts((prevContacts) =>
      prevContacts.map((contact) =>
        contact.id === updatedContact.id ? updatedContact : contact
      )
    );
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) =>
      prevContacts.filter((contact) => contact.id !== contactId)
    );
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main contacts={contacts} deleteContact={deleteContact} />} />
        <Route path="/create-contact" element={<CreateContact addContact={addContact} />} />
        <Route
          path="/edit-contact/:id"
          element={<EditContact contacts={contacts} updateContact={updateContact} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
