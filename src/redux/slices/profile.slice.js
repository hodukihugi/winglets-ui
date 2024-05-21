import {createSlice} from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        isAnswered : null,
        name: null,
    },
    reducers: {
        setIsAnswered: (state, action) => {
            state.isAnswered = action.payload.isAnswered;
        },
        profileLogout: (state) =>{
            state.isAnswered = null;
            state.name = null;
        },
        setName: (state,action) =>{
            state.name = action.payload.name;
        }

    },
});

export const {
    setIsAnswered,profileLogout,setName
} = profileSlice.actions;
export const selectIsAnswered = (state)=> state.profile.isAnswered;
export const selectName = (state)=> state.profile.name;
export default profileSlice.reducer;