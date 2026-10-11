import { deleteContact } from '../../redux/contactsSlice';
import Contact from '../contact/Contact'
import './ContactList.css'
import { useDispatch, useSelector } from "react-redux";

const ContactList = () => {
    const dispatch = useDispatch();
    const contactsNoFiltered = useSelector((state) => state.contacts.items);
    const handleDelete = id => dispatch(deleteContact(id));

    const filter = useSelector((state) => state.filters.name);

    const contacts = contactsNoFiltered.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
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