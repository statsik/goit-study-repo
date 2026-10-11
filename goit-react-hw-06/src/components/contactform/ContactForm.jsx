import { Formik, Form, Field, ErrorMessage } from "formik";;
import { nanoid } from 'nanoid'
import './ContactForm.css'
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const ContactForm = () => {

    const dispatch = useDispatch();

    const handleSubmit = (values) => {
        const newContact = {
        id: nanoid(),   
        name: values.name,
        number: values.number,
        };
        dispatch(addContact(newContact));
    };

    const validationSchema = Yup.object({
    name: Yup.string()
        .required('Name is required')
        .min(3, 'Name should be at least 3 characters long')
        .max(50, 'Name should be at most 50 characters'),
    number: Yup.string()
        .required('Name is required')
        .min(3, 'Name should be at least 3 characters long')
        .max(50, 'Name should be at most 50 characters'),
    });
    
    return (
        <Formik initialValues={{ name: '', number: '' }} onSubmit={handleSubmit} validationSchema={validationSchema}>
            <Form className="form-contact">
                <p>Name: </p>
                <Field name="name"></Field>
                <ErrorMessage name="name" component="div" className="error-message" />
                <p>Number: </p>
                <Field name="number"></Field>
                <ErrorMessage name="number" component="div" className="error-message" />
                <button type="submit">Add contact</button>
            </Form>
        </Formik> 
    )
}
export default ContactForm;