import { useState } from "react";

const MyProfile = () => {
  const [images, setImages] = useState([]);

  const avatar =
    "https://static.vecteezy.com/system/resources/previews/002/275/847/original/male-avatar-profile-icon-of-smiling-caucasian-man-vector.jpg";

  return {
    avatar: avatar,
    images: images,
    name: "abcxyz",
    age: "20",
    location: "London",
  };
};

export default MyProfile;
