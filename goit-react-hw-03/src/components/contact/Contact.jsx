import './Contact.css'

const Contact = ({ contact, onDelete }) => {
    return (
        <div className="contacts-part">
            <div className="contacts-mini">
                <p>{ contact.name }</p>
                <p>{ contact.number }</p>
            </div>
            <button className='button' onClick={() => onDelete(contact.id)}>Delete</button>
        </div>
    )
}
export default Contact;