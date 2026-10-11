import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const prevContacts = await readContacts();
        const singleContact = createFakeContact();
        prevContacts.push(singleContact);
        writeContacts(prevContacts);
    } catch (err) {
        console.log(err);
    }
};

addOneContact();
