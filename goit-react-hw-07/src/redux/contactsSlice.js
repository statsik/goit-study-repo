import { createSelector, createSlice } from "@reduxjs/toolkit";
import { selectNameFilter } from "./filtersSlice";
import fetchContacts, { addContact, deleteContact } from "./contactsOps";

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
    [selectContacts, selectNameFilter],
    (contacts, filter) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
)

const sliceContact = createSlice({
    name: "contacts",

    initialState: {
        items: [ 
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        loading: false,
        error: null
    },

    extraReducers: builder => {
    builder
        .addCase(fetchContacts.pending, (state) => {
            state.loading = true;
        })
        .addCase(fetchContacts.fulfilled, (state, action) => {
            state.loading = false;
            state.error = null;
            state.items = action.payload;
        })
        .addCase(fetchContacts.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        })
        .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter(contact => contact.id !== action.payload.id);
        });
  },    
});

const contactReducer = sliceContact.reducer;
export default contactReducer;