import { selectFilteredContacts } from '../../redux/contactsSlice';
import { deleteContact } from '../../redux/contactsOps';
import Contact from '../contact/Contact'
import './ContactList.css'
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => { 
    const dispatch = useDispatch();
    const handleDelete = id => dispatch(deleteContact(id));

    const contacts = useSelector(selectFilteredContacts);
    return (
        <>
            <ul className="contact-list">
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <Contact contact={contact} onDelete={() => handleDelete(contact.id)} />
                    </li>
                ))}
            </ul>
        </>
    )
}
export default ContactList;