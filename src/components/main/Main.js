import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import cover1 from "../../images/backgrounds/cover1.jpg";
import cover3 from "../../images/backgrounds/cover3.jpg";
import roma from "../../images/backgrounds/roma.jpg";
import beijing from "../../images/backgrounds/beijing.jpg";
import { CoverSubText, CoverSubText2, CoverText, PriceTag, StyledButton } from "../styledComponents/styledComponents";

const Main = () => {
  const [show, setShow] = useState("1");
  const [counter, setCounter] = useState(2);

  const textCovers = [
    {
      top: "Find your perfect",
      middle: "VACATION",
      bottom: "Italy,Rome,Venice,Milan",
    },
    { top: "Find excitement wherever you go", middle: "Beijing", bottom: "" , pricetg: true},
    {
      top: "Open your eyes to",
      middle: "Hidden World",
      bottom: "Malibu, Cape Town,Long Beach",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (show === "1" && counter === 2) {
        setShow("2");
        setCounter(0);
      } else if (show === "2" && counter === 0) {
        setShow("3");
        setCounter(1);
      } else if (show === "3" && counter === 1) {
        setShow("1");
        setCounter(2);
      }
    }, 7000);
    return () => clearInterval(interval);
  }, [show, counter]);
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          backgroundImage: `url(${
            show === "1"
              ? cover3
              : show === "2"
              ? roma
              : show === "3"
              ? beijing
              : cover1
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "all 2s ease",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexFlow: "column wrap",
            alignItems: "center",
            justifContent: "center",
          }}
        >
          {textCovers[counter].pricetg && (<PriceTag><Typography variant="h5">From</Typography> <Typography variant="h5">$500</Typography> </PriceTag>)}
          
          <CoverSubText variant="h3" textAlign='center'>{textCovers[counter].top}</CoverSubText>
          <CoverText variant="h1">{textCovers[counter].middle}</CoverText>
          <CoverSubText2 variant="h4">
            {textCovers[counter].bottom}
          </CoverSubText2 >
          <StyledButton>READ MORE</StyledButton>
        </Box>
      </Box>
    </div>
  );
};

export default Main;
