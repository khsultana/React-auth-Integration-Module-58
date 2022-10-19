import React, { useContext } from "react";
import { AuthContext } from "../../Context/UserContext";

const Home = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return <div></div>;
};

export default Home;
