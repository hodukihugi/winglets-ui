import { ImageList, ImageListItem } from "@mui/material";

const ImagesPreview = ({ character }) => {
  return (
    <div
      style={{
        height: "90vh",
        overflowY: "auto",
        backgroundColor: "white",
        overflowX: "hidden",
        marginRight: "10%",
      }}
    >
      <ImageList sx={{ width: 600, marginRight: 16, padding: 0, margin: 0 }}>
        {character.images.map((imgSrc, index) => (
          <ImageListItem key={index}>
            <img
              src={imgSrc}
              alt={`Character image ${index + 1}`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                margin: 0,
              }}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default ImagesPreview;
