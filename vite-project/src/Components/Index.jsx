import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDebounce } from './UseDebounce'

const Main = ({ contacts, deleteContact }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedSearchTerm = useDebounce(searchQuery, 500); // Debounced search query

  const filteredContacts = useMemo(
    () => contacts.filter(contact =>
      contact.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    ),
    [contacts, debouncedSearchTerm]
  );

  const navigate = useNavigate();

  const handleDelete = useCallback((id) => {
    deleteContact(id);
  }, [deleteContact]);

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center mb-4">
        <input
          type="text"
          className="border p-2 rounded"
          placeholder="Search contacts..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          onClick={() => navigate('/create-contact')}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add Contact
        </button>
      </div>

      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredContacts.map((contact) => (
            <tr key={contact.id}>
              <td className="border p-2">{contact.name}</td>
              <td className="border p-2">{contact.email}</td>
              <td className="border p-2">
                <button
                  onClick={() => navigate(`/edit-contact/${contact.id}`)}
                  className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
