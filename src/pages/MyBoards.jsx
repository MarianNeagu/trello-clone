import React from "react";
import Header from "../components/Header";

const MyBoards = () => {
  return (
    <>
      <Header showHome={true} showMyBoards={false} showProfile={true} />
      <h1>My boards</h1>
    </>
  );
};

export default MyBoards;
