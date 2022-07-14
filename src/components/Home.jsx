import React from "react";
import AppContext from "../context/AppContext";
import ContentCard from "./ContentCard";
import "./styles/Home.css";

const Home = () => {
  const { background } = React.useContext(AppContext);
  return (
    <div className="Home">
      <div
        className="Home-container"
        id={"id" + background}
        style={{
          backgroundImage: `https://source.unsplash.com/600x900/?${background}`,
        }}
      >
        <ContentCard />
      </div>
    </div>
  );
};

export default Home;
