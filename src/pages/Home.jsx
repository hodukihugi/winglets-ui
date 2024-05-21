import Header from "../components/homeItems/Header";
import WingletsCard from "../components/homeItems/WingletsCard";
import { useEffect, useState } from "react";
import matchedPeople from "../components/profileItems/matchedPeople";
import { useAppSelector } from "../redux/hooks";
import { selectAuthToken } from "../redux/slices/auth.slice";
import { useGetProfileQuery } from "../redux/apis/profile.api";
import { useDispatch } from "react-redux";
import { hideTopLoading, showTopLoading } from "../redux/slices/common.slice";
import { useNavigate } from "react-router-dom";
import "./home.css";
import { setIsAnswered, setName } from "../redux/slices/profile.slice";
const Home = () => {
  const [matchedProfile, setMatchedProfile] = useState([]);
  const token = useAppSelector(selectAuthToken);
  const { data, isLoading } = useGetProfileQuery(token);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  // useEffect(() => {
  //   if (isLoading) {
  //     dispatch(showTopLoading());
  //   } else {
  //     dispatch(hideTopLoading());
  //     if (data && data.message !== "success") {
  //       navigate("/createProfile");
  //     }
  //     if (data && data.data && data.data.answered === 1) {
  //       dispatch(
  //         setIsAnswered({
  //           isAnswered: true,
  //         })
  //       );
  //     }
  //     if (data && data.data && data.data.name !== null) {
  //       dispatch(
  //         setName({
  //           name: data.data.name,
  //         })
  //       );
  //     }
  //   }
  // }, [isLoading]);
  // console.log(token);
  // console.log(data);

  return (
    <div className="root-home" style={{ overflow: "hidden" }}>
      <div className="title"> Winglets</div>
      <Header matchedProfile={matchedProfile} matchedPeople={matchedPeople} />
      <div style={{ marginLeft: "28%", padding: 0 }}>
        <WingletsCard
          matchedProfile={matchedProfile}
          setMatchedProfile={setMatchedProfile}
        />
      </div>
    </div>
  );
};

export default Home;
