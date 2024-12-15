import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditContact = ({ contacts, updateContact }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const contactToEdit = contacts.find((contact) => contact.id === parseInt(id));

  const [contact, setContact] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    if (contactToEdit) {
      setContact(contactToEdit);
    }
  }, [contactToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateContact(contact);
    navigate('/');
  };

  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  if (!contactToEdit) {
    return <div>Contact not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <h2 className="text-2xl mb-4">Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={contact.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={contact.email}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default EditContact;
