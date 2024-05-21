import React, { useState, useMemo, useRef, useEffect, Fragment } from "react";
import TinderCard from "react-tinder-card";
import Profile from "../profileItems/listProfile";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import UndoIcon from "@mui/icons-material/Undo";
import PopupCard from "./PopupCard";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ImagesPreview from "./ImagesPreview";
import "./Winglet.css";
import { height, width } from "@mui/system";
import { useAppSelector } from "../../redux/hooks";
import { selectIsAnswered } from "../../redux/slices/profile.slice";

function WingletsCard({ matchedProfile, setMatchedProfile }) {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(Profile.length - 1);
  const currentIndexRef = useRef(currentIndex);
  const check = useAppSelector(selectIsAnswered);
  const childRefs = useMemo(
    () =>
      Array(Profile.length)
        .fill(0)
        .map(() => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < Profile.length - 1;
  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    updateCurrentIndex(index - 1);
    if (direction === "right") {
      const profile = Profile[index];
      if (matchedProfile && !matchedProfile.includes(profile)) {
        setMatchedProfile((prevProfiles) => [...prevProfiles, profile]);
      }
    }
  };

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current);
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < Profile.length) {
      await childRefs[currentIndex].current.swipe(dir);
    }
  };

  const goBack = async () => {
    if (!canGoBack || !matchedProfile) return; // Add a null check for matchedProfile
    const newIndex = currentIndex + 1;
    const profile = Profile[newIndex];
    const updatedMatchedProfile = matchedProfile.filter(
      (p) => JSON.stringify(p) !== JSON.stringify(profile)
    );
    setMatchedProfile(updatedMatchedProfile);
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const clearButtonStyles = {
    backgroundColor: !canSwipe && "#c3c4d3",
  };

  const doneButtonStyles = {
    backgroundColor: !canSwipe && "#c3c4d3",
  };

  const goBackButtonStyle = {
    backgroundColor: !canGoBack && "#c3c4d3",
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowLeft":
          swipe("left");
          break;
        case "ArrowRight":
          swipe("right");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  return (
    <div>
      {check ? (
        <div>
          <div
            style={{
              width: "100%",
              height: "100vh",
              position: "relative",
              marginRight: "5%",
            }}
          >
            {Profile.map((character, index) => (
              <div
                key={character.name}
                className="profile-container"
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  transform: `translateY(${index * 0}px)`,
                  zIndex: index === currentIndex ? 1 : 0,
                }}
              >
                <ImagesPreview character={character} />
                <TinderCard
                  ref={childRefs[index]}
                  className="swipe"
                  key={character.name}
                  onSwipe={(dir) => swiped(dir, character.name, index)}
                  onCardLeftScreen={() => outOfFrame(character.name, index)}
                  preventSwipe={["up", "down"]}
                  style={{
                    position: "absolute",
                    top: 0,
                    transform: `translateY(${index * -100}%)`,
                    zIndex: Profile.length - index,
                    width: "100%",
                  }}
                >
                  <div
                    className="card"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <PopupCard character={character} />
                  </div>
                </TinderCard>
              </div>
            ))}
          </div>
          <div className="swipe-buttons">
            <button
              className="clear-button"
              style={clearButtonStyles}
              onClick={() => swipe("left")}
            >
              <ClearIcon sx={{ fontSize: "40px" }} />
            </button>
            <button
              className="back-button"
              style={goBackButtonStyle}
              onClick={() => goBack()}
            >
              <UndoIcon sx={{ fontSize: "40px" }} />
            </button>
            <button
              className="done-button"
              style={doneButtonStyles}
              onClick={() => swipe("right")}
            >
              <DoneIcon sx={{ fontSize: "40px" }} />
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Typography>Please enter your information</Typography>
          <button onClick={() => navigate("/Q&A")}>
            go to Create Profile page
          </button>
        </div>
      )}
    </div>
  );
}

export default WingletsCard;
