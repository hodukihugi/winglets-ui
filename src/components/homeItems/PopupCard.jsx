import React, { useState } from "react";
import { Stack } from "@mui/system";
import { Avatar } from "@mui/material";
import "./PopupCard.css";
const PopupCard = ({ character }) => {
  return (
    <div className="swipe-Card">
      <Avatar
        src={character.avatar}
        alt={`${character.name}'s avatar`}
        style={{ height: "80px", width: "80px" }}
      />{" "}
      <h1>{character.name}</h1>
      <span>Age:{character.age}</span>
      <span>
        About {character.name}:{character.bio}
      </span>
      <span>Job: {character.job}</span>
    </div>
  );
};

export default PopupCard;
