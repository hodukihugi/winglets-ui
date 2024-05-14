import {createSlice} from "@reduxjs/toolkit";

export const registerSlice = createSlice({
    name: "register",
    initialState: {
        email: null,
    },
    reducers: {
        setRegister: (state,action) => {
            state.email = action.payload.email;
        }
    }
});
    export const {setRegister} = registerSlice.actions;
    export const selectEmail = (state) => state.register.email;
    export default registerSlice.reducer;