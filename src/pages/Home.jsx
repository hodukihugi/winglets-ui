import { Stack } from "@mui/material";
import Header from "../components/homeItems/Header";
import WingletsCard from "../components/homeItems/WingletsCard";
import {useEffect, useState} from "react";
import matchedPeople from "../components/profileItems/matchedPeople";
import {useAppSelector} from "../redux/hooks";
import {selectAuthToken} from "../redux/slices/auth.slice";
import { useGetProfileQuery} from "../redux/apis/profile.api";
import {useDispatch} from "react-redux";
import {hideTopLoading, showTopLoading} from "../redux/slices/common.slice";
import {useNavigate} from "react-router-dom";
const Home = () => {
  const [matchedProfile, setMatchedProfile] = useState([]);
  const token = useAppSelector(selectAuthToken);

  const {data,isLoading} =useGetProfileQuery(token);

  const dispatch = useDispatch();

  const navigate = useNavigate();

    useEffect(() => {
        if(isLoading) {
            dispatch(showTopLoading());
        }
        else {
            dispatch(hideTopLoading());
            if(data && data.message !=='success') {
                navigate('/createProfile');
            }
        }
    }, [isLoading]);
    console.log(token);
    console.log(data);

  return (
    <div>
      <Header matchedProfile={matchedProfile} matchedPeople={matchedPeople} />
      <Stack
        sx={{
          marginLeft: "400px",
          height: "80px",
          marginBottom: "30px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1 style={{ color: "#EB9DA3" }}>Winglets</h1>
      </Stack>
      <div style={{ marginLeft: "400px", padding: "10px" }}>
        <WingletsCard
          matchedProfile={matchedProfile}
          setMatchedProfile={setMatchedProfile}
        />
      </div>
    </div>
  );
};

export default Home;
