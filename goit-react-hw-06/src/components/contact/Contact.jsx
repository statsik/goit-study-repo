import { useDispatch } from 'react-redux';
import './Contact.css'
import { deleteContact } from '../../redux/contactsSlice';

const Contact = ({ contact }) => {
    const dispatch = useDispatch();
    const handleDelete = id => dispatch(deleteContact(id));
    return (
        <div className="contacts-part">
            <div className="contacts-mini">
                <p>{ contact.name }</p>
                <p>{ contact.number }</p>
            </div>
            <button className='button' onClick={() => handleDelete(contact.id)}>Delete</button>
        </div>
    )
}
export default Contact;