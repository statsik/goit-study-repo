import { useDispatch } from 'react-redux'
import './App.css'
import ContactForm from './contactform/ContactForm'
import ContactList from './contactlist/ContactList'
import SearchBox from './searchbox/SearchBox'
import { useEffect } from 'react'
import fetchContacts from '../redux/contactsOps'

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        <ContactList />
      </div>
    </> 
  )
}

export default App
