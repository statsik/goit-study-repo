import { readContacts } from "../utils/readContacts.js";

export const getAllContacts = async () => {
    try {
        const dbContacts = readContacts();
        return dbContacts;
    } catch (err) {
        console.log(err);
    }
};

console.log(await getAllContacts());
