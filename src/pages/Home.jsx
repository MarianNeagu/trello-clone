import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import { db } from "../firebase_setup/firebase";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import styled from "styled-components";
import { Container, Grid } from "@material-ui/core";
import { useCookies } from "react-cookie";
import LoadingScreen from "../components/LoadingScreen";
import { useNavigate } from "react-router-dom";

const StyledCard = styled(Card)`
  width: 200px;
  height: 200px;
  margin: 20px;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const StyledTypography = styled(Typography)`
  text-align: center;
`;

const Home = () => {
  const [boards, setBoards] = useState();
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();

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

  if (!cookies.user) {
    navigate("/login");
  }

  if (!boards) return <LoadingScreen />;

  return (
    <>
      <Header showHome={false} showMyBoards={true} showProfile={true} />
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {boards.map((board, index) => (
            <Grid item xs={4} key={index}>
              <StyledCard>
                <StyledCardContent>
                  <StyledTypography variant="h5" component="h2">
                    {board.title}
                  </StyledTypography>
                </StyledCardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Home;
