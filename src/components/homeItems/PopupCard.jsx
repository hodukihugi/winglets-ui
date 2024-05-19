import React, { useState } from "react";
import { Stack } from "@mui/system";

const PopupCard = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={togglePopup}>
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
      </button>
      {isOpen && (
        <Stack>
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
                {character.horoscope}, {character.job}
              </span>
            </div>
          </div>
        </Stack>
      )}
    </div>
  );
};

export default PopupCard;
