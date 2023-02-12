import React from "react";
import Header from "../components/Header";

const Board = () => {
  return (
    <>
      <Header showHome={true} showMyBoards={false} showProfile={true} />
      <h1>Board</h1>
    </>
  );
};

export default Board;
