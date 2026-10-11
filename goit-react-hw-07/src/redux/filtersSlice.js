import { createSlice } from "@reduxjs/toolkit";

export const selectNameFilter = state => state.filters.name;

const sliceFilter = createSlice({
    name: "filters",

    initialState: {
        name: ""
    },
     
    reducers: {
        changeFilter: (state, action) => {
            state.name = action.payload;
        },
    }
});

const filterAction = sliceFilter.actions;
export const { changeFilter} = filterAction;
const filterReducer = sliceFilter.reducer;
export default filterReducer;
