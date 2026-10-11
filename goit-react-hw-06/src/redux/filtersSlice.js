import { createSlice } from "@reduxjs/toolkit";

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
