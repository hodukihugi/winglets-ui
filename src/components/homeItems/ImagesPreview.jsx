import { ImageList, ImageListItem } from "@mui/material";

const ImagesPreview = ({ character }) => {
  return (
    <div>
      <ImageList
        sx={{ width: 600, height: "90%", marginRight: 16, padding: 0 }}
      >
        {character.images.map((imgSrc, index) => (
          <ImageListItem key={index}>
            <img
              src={imgSrc}
              alt={`Character image ${index + 1}`}
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
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
