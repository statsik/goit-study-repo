import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    try {
        const json = JSON.stringify(updatedContacts, null, 2);
        const data = await fs.writeFile(PATH_DB, json, 'utf8');
        return data;
    } catch (err) {
        console.log(err);
    }
};
