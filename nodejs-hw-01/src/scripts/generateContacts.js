import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

const generateContacts = async (number) => {
    try {
        const contacts = [];
        for (let i = 0; i < number; i++) {
            contacts.push(createFakeContact());
        }

        const prevContacts = await readContacts();
        const updateContacts = [...prevContacts, ...contacts];
        writeContacts(updateContacts);
    } catch (err) {
        console.log(err);
    }

};

generateContacts(5);
