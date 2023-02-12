import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import styled from "styled-components";
import { CardActionArea, Typography } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import IconButton from "@mui/material/IconButton";

const StyledTypography = styled(Typography)`
  text-align: center;
  font-family: "Helvetica";
`;

const BoardCard = ({ title, isStarred }) => {
  return (
    <Card style={{ width: "200px", height: "170px", margin: "20px" }}>
      <CardContent>
        <StyledTypography variant="h5">{title}</StyledTypography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {isStarred ? (
            <StarRateRoundedIcon sx={{ color: "#ffa600" }} />
          ) : (
            <StarBorderRoundedIcon />
          )}
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default BoardCard;
