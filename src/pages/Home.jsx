import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../firebase_setup/firebase";
import { Container, Grid } from "@material-ui/core";
import { useCookies } from "react-cookie";
import LoadingScreen from "../components/LoadingScreen";
import { useNavigate } from "react-router-dom";
import BoardCard from "../components/BoardCard";
import { Typography } from "@mui/material";

const Home = () => {
  const [boards, setBoards] = useState();
  const [cookies] = useCookies(["user"]);
  const navigate = useNavigate();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const boardsRef = db.collection("boards");
  //     const boardsSnapshot = await boardsRef.get();
  //     const boards = [];
  //     boardsSnapshot.forEach((doc) => {
  //       boards.push(doc.data());
  //     });
  //     setBoards(boards);
  //   };
  //   fetchData();
  // }, [boards]);

  useEffect(() => {
    setBoards([
      {
        title: "test",
        isStarred: false,
        tasks: ["task1", "task2"],
        userId: "test",
      },
      {
        title: "test2",
        isStarred: false,
        tasks: ["task1", "task2"],
        userId: "test",
      },
      {
        title: "test3",
        isStarred: false,
        tasks: ["task1", "task2"],
        userId: "test",
      },
      {
        title: "test4",
        isStarred: false,
        tasks: ["task1", "task2"],
        userId: "test",
      },
    ]);
  }, []);

  if (!boards) return <LoadingScreen />;

  return (
    <>
      <Header showHome={false} showMyBoards={true} showProfile={true} />
      <Container maxWidth="lg" style={{ marginTop: "40px" }}>
        <Grid container spacing={2}>
          {boards.map((board, index) => (
            <Grid item key={index}>
              <BoardCard title={board.title} isStarred={board.isStarred} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
