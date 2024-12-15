import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateContact = ({ addContact }) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact({
      id: Date.now(), 
      name: contact.name,
      email: contact.email,
    });
    setContact({ name: "", email: "" });
    navigate("/"); 
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl mb-4">Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={(e) => setContact({ ...contact, name: e.target.value })}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default CreateContact;
