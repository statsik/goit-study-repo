import Contact from '../contact/Contact'
import SearchBox from '../searchbox/SearchBox'
import './ContactList.css'

const ContactList = ({ contacts, handleDelete}) => {
    return (
        <>
            <ul className="contact-list">
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <Contact contact={contact} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ContactList;