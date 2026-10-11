import './App.css'
import ContactForm from './contactform/ContactForm'
import ContactList from './contactlist/ContactList'
import SearchBox from './searchbox/SearchBox'

function App() {
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
