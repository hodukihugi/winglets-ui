import React, {useState} from "react";
import {TextField, Typography} from "@mui/material";
import Jobs from "../../components/profilePageItems/Jobs";
import HomeTown from "../../components/profilePageItems/HomeTown";
import Horoscope from "../../components/profilePageItems/Horoscope";
import HobbyComponent from "../../components/introducingPageItems/Hobby";
import Birthdate from "../../components/profilePageItems/Birthdate";
import "../User/ProfileCreation.css";
import Height from "../../components/profilePageItems/Height";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../redux/hooks";
import {
    selectBirthdate, selectCoordinates, selectEducation,
    selectGender,
    selectHeight, selectHometown,
    selectHoroscope, selectLanguage,
    selectName, setGender,
    setName
} from "../../redux/slices/profile.slice";
import {selectEmail} from "../../redux/slices/register.slice";

const ProfileCreation = () => {
    const navigate = useNavigate();
    const [inputName, setInputName] = useState("");
    const [inputGender, setInputGender] = useState('');
    const handleGenderChange = (event) => {
        setInputGender(event.target.value);
    };
    const dispatch = useAppDispatch();
    const handleNameInput = (e) => {
        setInputName(e.target.value);
    };
    dispatch(setName({
        name: inputName,
    }));
    dispatch(setGender({
        gender: inputGender,
    }))
    const selectedName = useAppSelector(selectName);
    const selectedGender = useAppSelector(selectGender);
    const selectedBirthdate = useAppSelector(selectBirthdate);
    const selectedHeight = useAppSelector(selectHeight);
    const selectedHoroscope = useAppSelector(selectHoroscope);
    const selectedHobby = useAppSelector(selectEmail);
    const selectedLanguage = useAppSelector(selectLanguage);
    const selectedEducation = useAppSelector(selectEducation);
    const selectedHometown = useAppSelector(selectHometown);
    const selectedCoordinates = useAppSelector(selectCoordinates);

    const handleSave = () => {

        console.log(selectedName);
        console.log(selectedGender);
        console.log(selectedBirthdate);
        console.log(selectedHeight);
        console.log(selectedHoroscope);
        console.log(selectedLanguage);
        console.log(selectedHobby);
        console.log(selectedLanguage);
        console.log(selectedEducation);
        console.log(selectedHometown);
        console.log(selectedCoordinates);
        //navigate('/');
    }

    return (
        <div className="profile-creation-container">
            <Typography className="welcome-text" sx={{fontSize: "50px"}}>
                Welcome to Winglets
            </Typography>
            <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                onChange={handleNameInput}
                value={inputName}
                className="input-field"
            />
            <div>
                <div className="gender-card">
                    <div className="large-svg-container">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 50 90"
                            className="largemalesvg"
                            height="90"
                            width="50"
                        >
                            <circle
                                strokeWidth="6"
                                stroke="#76E3FE"
                                r="22"
                                cy="25"
                                cx="25"
                            ></circle>
                            <path
                                strokeLinecap="round"
                                strokeWidth="6"
                                stroke="#76E3FE"
                                d="M25 47L25 87"
                            ></path>
                            <path
                                strokeLinecap="round"
                                strokeWidth="6"
                                stroke="#76E3FE"
                                d="M25 86.6958L38.6958 73"
                            ></path>
                            <path
                                strokeLinecap="round"
                                strokeWidth="6"
                                stroke="#76E3FE"
                                d="M11 73L24.6958 86.6958"
                            ></path>
                        </svg>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 50 90"
                            className="largefemalesvg"
                            height="90"
                            width="50"
                        >
                            <circle
                                strokeWidth="6"
                                stroke="#F57CB3"
                                r="22"
                                cy="25"
                                cx="25"
                            ></circle>
                            <path
                                strokeLinecap="round"
                                strokeWidth="6"
                                stroke="#F57CB3"
                                d="M25 47L25 87"
                            ></path>
                            <path
                                strokeLinecap="round"
                                strokeWidth="6"
                                stroke="#F57CB3"
                                d="M12 73H38"
                            ></path>
                        </svg>
                    </div>
                    <form action="#">
                        <p className="heading">What's your gender?</p>
                        <div className="radio-wrapper">
                            <input
                                className="gender-radio-buttons"
                                id="male"
                                value="male"
                                name="gender"
                                type="radio"
                                checked={inputGender === 'male'}
                                onChange={handleGenderChange}
                            />
                            <label className="genderlabel malebutton" htmlFor="male">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 50 90"
                                    className="smallsvg malesmallsvg"
                                >
                                    <circle
                                        strokeWidth="6"
                                        stroke="#76E3FE"
                                        r="22"
                                        cy="25"
                                        cx="25"
                                    ></circle>
                                    <path
                                        strokeLinecap="round"
                                        strokeWidth="6"
                                        stroke="#76E3FE"
                                        d="M25 47L25 87"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeWidth="6"
                                        stroke="#76E3FE"
                                        d="M25 86.6958L38.6958 73"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeWidth="6"
                                        stroke="#76E3FE"
                                        d="M11 73L24.6958 86.6958"
                                    ></path>
                                </svg>
                                Male
                            </label>

                            <input
                                className="gender-radio-buttons"
                                id="female"
                                value="female"
                                name="gender"
                                type="radio"
                                checked={inputGender === 'female'}
                                onChange={handleGenderChange}
                            />
                            <label className="genderlabel femalebutton" htmlFor="female">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 50 90"
                                    className="smallsvg"
                                >
                                    <circle
                                        strokeWidth="6"
                                        stroke="#F57CB3"
                                        r="22"
                                        cy="25"
                                        cx="25"
                                    ></circle>
                                    <path
                                        strokeLinecap="round"
                                        strokeWidth="6"
                                        stroke="#F57CB3"
                                        d="M25 47L25 87"
                                    ></path>
                                    <path
                                        strokeLinecap="round"
                                        strokeWidth="6"
                                        stroke="#F57CB3"
                                        d="M12 73H38"
                                    ></path>
                                </svg>
                                Female
                            </label>
                        </div>
                    </form>
                </div>
            </div>
            <Height/>
            <Birthdate/>
            <Jobs/>
            <Horoscope/>
            <HobbyComponent/>
            <HomeTown/>

            <div>
                <button className="animated-button" onClick={handleSave}>
                    <svg
                        viewBox="0 0 24 24"
                        className="arr-2"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                    <span className="text">Save</span>
                    <span className="circle"></span>
                    <svg
                        viewBox="0 0 24 24"
                        className="arr-1"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default ProfileCreation;
