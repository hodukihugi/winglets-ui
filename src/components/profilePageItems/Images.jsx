import React, { useState } from "react";
import { Button, IconButton, ImageList, ImageListItem } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

// Importing the images from MyProfile.jsx
import myProfile from "../profileItems/myProfile";

const Images = () => {
  const [avatar, setAvatar] = useState(null);
  const [images, setImages] = useState(myProfile.images || []); // Using the images from MyProfile.jsx

  const handleAvatarUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      const newImage = { id: Date.now(), img: imageUrl };
      setAvatar(imageUrl);
      setImages([...images, newImage]);
    }
  };

  const handleAvatarDelete = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  return (
    <div style={{ margin: "auto", marginTop: "80px", marginBottom: "50px" }}>
      <h1 style={{ fontSize: "20px", textAlign: "left", color: "white" }}>
        Image
      </h1>
      <ImageList sx={{ width: 400, height: 400 }}>
        {images.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={item.img}
              alt="Avatar"
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <IconButton
                color="primary"
                aria-label="delete"
                onClick={() => handleAvatarDelete(item.id)}
              >
                <DeleteIcon />
              </IconButton>
            </div>
          </ImageListItem>
        ))}
      </ImageList>
      <Button
        variant="contained"
        component="label"
        style={{
          marginTop: "20px",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        Upload Avatar
        <input
          type="file"
          hidden
          onChange={handleAvatarUpload}
          accept="image/*"
        />
      </Button>
    </div>
  );
};

export default Images;
