import './App.css'
import ContactForm from './contactform/ContactForm'
import ContactList from './contactlist/ContactList'
import SearchBox from './searchbox/SearchBox'
import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';


function App() {
  const [contacts, setContacts] = useState(() => {
      const savedContacts = window.localStorage.getItem('contact-list');
      return savedContacts ? JSON.parse(savedContacts) : [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    }
     
  )

  useEffect(() => {
    window.localStorage.setItem('contact-list', JSON.stringify(contacts));
  }, [contacts]);

  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term) => {
    setSearchTerm(term);  
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleDelete = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  }

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} setContacts={ setContacts } />
        <SearchBox searchTerm={searchTerm} onSearch={handleSearch}/>
        <ContactList contacts={filteredContacts} setContacts={setContacts} handleDelete={ handleDelete } />
      </div>
    </> 
  )
}

export default App
