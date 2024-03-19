import React, { useContext } from "react";
import { AuthContext } from "../context/authContext";

const HomePage = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div>
      {currentUser.username}, {currentUser.email}
    </div>
  );
};

export default HomePage;
