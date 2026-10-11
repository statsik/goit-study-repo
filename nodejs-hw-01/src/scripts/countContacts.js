import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
    try {
        const dbContacts = await readContacts();
        let number = 0;
        dbContacts.forEach(element => {
            number++;
        });
        return number;
    } catch (err) {
        console.log(err);
    }
};

console.log(await countContacts());
