import React, { useState, useMemo, useRef } from "react";
import TinderCard from "react-tinder-card";
import Profile from "../profileItems/listProfile";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";
import UndoIcon from "@mui/icons-material/Undo";
import { useEffect } from "react";
function WingletsCard({ matchedProfile, setMatchedProfile }) {
  const [currentIndex, setCurrentIndex] = useState(Profile.length - 1);
  const currentIndexRef = useRef(currentIndex);
  const [currentView, setCurrentView] = useState(0);

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
      if (!matchedProfile.includes(profile)) {
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
    if (!canGoBack) return;
    const newIndex = currentIndex + 1;
    const profile = Profile[newIndex];
    const updatedMatchedProfile = matchedProfile.filter(
      (p) => JSON.stringify(p) !== JSON.stringify(profile)
    );
    setMatchedProfile(updatedMatchedProfile);
    updateCurrentIndex(newIndex);
    await childRefs[newIndex].current.restoreCard();
  };

  const containerStyles = {
    width: "1174px",
    height: "787px",
    backgroundColor: "inherit",
    border: "1px solid #857f74",
    borderRadius: "2rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
    position: "relative",
    overflow: "hidden",
  };
  const clearButtonStyles = {
    position: "absolute",
    bottom: "20px",
    left: "1000px",
    transform: "translateX(-50%)",
    cursor: "pointer",
    color: "#ffc936",
    backgroundColor: !canSwipe && "#c3c4d3",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  };
  const doneButtonStyles = {
    position: "absolute",
    bottom: "20px",
    left: "1330px",
    transform: "translateX(-50%)",
    cursor: "pointer",
    color: "#ffc936",
    backgroundColor: !canSwipe && "#c3c4d3",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  };
  const goBackButtonStyle = {
    position: "absolute",
    bottom: "20px",
    left: "1165px",
    transform: "translateX(-50%)",
    cursor: "pointer",
    backgroundColor: !canGoBack && "#c3c4d3",
    color: "#ffc936",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
  };

  const [moving, setMoving] = useState(false);

  const moveDown = () => {
    if (!moving && currentView <= 0) {
      setMoving(true);
      setCurrentView((prevView) => prevView + 1);
      setTimeout(() => {
        setMoving(false);
      }, 500);
    }
  };

  const moveUp = () => {
    if (!moving && currentView >= 0) {
      setMoving(true);
      setCurrentView((prevView) => prevView - 1);
      setTimeout(() => {
        setMoving(false);
      }, 500);
    }
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "ArrowUp":
          moveUp();
          break;
        case "ArrowDown":
          moveDown();
          break;
        case "ArrowLeft":
          swipe("left");
          setCurrentView(0);
          break;
        case "ArrowRight":
          swipe("right");
          setCurrentView(0);
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
      <div style={containerStyles}>
        {Profile.map((character, index) => (
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
                transform: `translateY(${index * 0}px)`,
                zIndex: index === currentIndex ? 1 : 0,
              }}
            >
              {currentView === 0 && (
                <div
                  className="first-div"
                  style={{
                    width: "1174px",
                    height: "787px",
                    backgroundColor: "#E27B83",
                    borderRadius: "2rem",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row",
                    transition: "opacity 0.5s ease-in-out",
                  }}
                >
                  <div
                    style={{
                      flex: "0 0 50%",
                      overflow: "hidden",
                      borderRadius: "2rem 0 0 2rem",
                      background: `url(${character.avatar})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        bottom: "20px",
                        left: "20px",
                        color: "white",
                        fontSize: "60px",
                      }}
                    >
                      {character.name}, {character.age}
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "0 0 50%",
                      wordWrap: "break-word",
                      position: "relative",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <h1>About {character.name}</h1>
                    <span>{character.bio}</span>
                  </div>
                </div>
              )}
              {currentView === 1 && (
                <div
                  className="second-div"
                  style={{
                    width: "1174px",
                    height: "787px",
                    backgroundColor: "#E27B83",
                    borderRadius: "2rem",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "row",
                  }}
                >
                  <div
                    style={{
                      flex: "0 0 50%",
                      overflow: "hidden",
                      borderRadius: "2rem 0 0 2rem",
                      background: `url(${character.images[0]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      position: "relative",
                    }}
                  ></div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flex: "0 0 50%",
                      wordWrap: "break-word",
                      position: "relative",
                      flexDirection: "column",
                      textAlign: "center",
                    }}
                  >
                    <h1>Hobby: {character.hobby}</h1>
                    <span>
                      {character.horoscope} ,{character.job}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </TinderCard>
        ))}
      </div>
      <div className="button">
        <button style={clearButtonStyles} onClick={() => swipe("left")}>
          <ClearIcon sx={{ fontSize: "60px" }} />
        </button>
        <button style={goBackButtonStyle} onClick={() => goBack()}>
          <UndoIcon sx={{ fontSize: "60px" }} />
        </button>
        <button style={doneButtonStyles} onClick={() => swipe("right")}>
          <DoneIcon sx={{ fontSize: "60px" }} />
        </button>
      </div>
      {lastDirection ? (
        <h2 key={lastDirection} className="infoText">
          You swiped {lastDirection}
        </h2>
      ) : (
        <h2 className="infoText"></h2>
      )}
    </div>
  );
}

export default WingletsCard;
