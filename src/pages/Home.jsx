import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../firebase_setup/firebase";

const Home = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const boardsRef = db.collection("boards");
      const boardsSnapshot = await boardsRef.get();
      const boards = [];
      boardsSnapshot.forEach((doc) => {
        boards.push(doc.data());
      });
      setBoards(boards);
    };
    fetchData();
  }, [boards]);

  if (boards.length > 0)
    return (
      <>
        <Header showHome={false} showMyBoards={true} showProfile={true} />

        <div>
          {boards.map((board, index) => (
            <div key={index}>
              {<Typography>Board: {board.title}</Typography>}
            </div>
          ))}
        </div>
      </>
    );
};

export default Home;
