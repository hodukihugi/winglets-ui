import {createSlice} from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: "profile",
    initialState: {
        name: null,
        gender: null,
        birthdate: null,
        height: null,
        horoscope: null,
        hobby: null,
        language: null,
        education: null,
        hometown: null,
        coordinates: null,
    },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload.name;
        },
        setGender: (state,action) => {
            state.gender = action.payload.gender;
        },
        setBirthdate: (state, action) => {
            state.birthdate = action.payload.birthdate;
        },
        setHeight: (state,action) => {
            state.height = action.payload.height;
        },
        setHoroscope: (state, action) => {
            state.horoscope = action.payload.horoscope;
        },
        setHobby: (state,action) => {
            state.hobby = action.payload.hobby;
        },
        setLanguage: (state, action) => {
            state.language = action.payload.language;
        },
        setEducation: (state, action) => {
            state.education = action.payload.education;
        },
        setHometown: (state, action) => {
            state.hometown = action.payload.hometown;
        },
        setCoordinates: (state,action) => {
            state.coordinates = action.payload.coordinates;
        },
    },
});
export const selectName = (state) => state.profile.name;
export const selectGender = (state) => state.profile.gender;
export const selectBirthdate = (state) => state.profile.birthdate;
export const selectHeight = (state) => state.height;
export const selectHoroscope = (state) => state.horoscope;
export const selectHobby = (state) => state.hobby;
export const selectLanguage = (state) => state.language;
export const selectEducation = (state) => state.education;
export const selectHometown = (state) => state.hometown;
export const selectCoordinates = (state) => state.coordinates;

export const {
    setName,
    setGender,
    setBirthdate,
    setHoroscope,
    setHeight,
    setHobby,
    setLanguage,
    setEducation,
    setHometown,
    setCoordinates
} = profileSlice.actions;
export default profileSlice.reducer;