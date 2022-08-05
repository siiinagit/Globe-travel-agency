import { Avatar, Box, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import { coments } from "./coments-helper";

const Coments = () => {
  return (
    <Box sx={{ minHeight: "50vh", padding: "25px" }}>
      <Box
        className="coments"
        display="flex"
        flexDirection= "row"
        flexWrap='wrap'
        alignItems="center"
        justifyContent={{ xl: "space-evenly", xs: "center" }}
      >
        {coments.map((com) => {
          return (
            <Paper
              key={com.id}
              elevation={3}
              sx={{
                width: { xl: "25rem", xs: "20rem" },
                height: { xl: "25rem", xs: "20rem" },
                padding: { xl: "15px", xs: "5px" },
                backgroundColor: "paleturquoise",
                display: "flex",
                flexFlow: { xl: "row wrap", xs: "row wrap" },
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: { xl: "0", xs: "5px" },
              }}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="space-around"
                sx={{ height: "7rem" }}
              >
                <Rating defaultValue={com.rating} precision={0.5} readOnly />
                <Typography
                  fontWeight="bold"
                  fontSize="2rem"
                  fontFamily="Halant"
                >
                  {com.country}
                </Typography>
              </Box>

              <Typography
                fontWeight="bold"
                fontSize={{ xl: "1rem", xs: ".8rem" }}
                fontFamily="Halant"
                color="GrayText"
              >
                {com.comment}
              </Typography>

              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Avatar
                  alt="user1"
                  src={com.image}
                  sx={{ marginRight: "20px" }}
                />
                <Box display="flex" flexDirection="column" alignItems="center">
                  <Typography fontFamily="Raleway" fontWeight="bold">
                    {com.name}
                  </Typography>
                  <Typography fontFamily="Halant" color="GrayText">
                    {com.ocupation}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          );
        })}
      </Box>
    </Box>
  );
};

export default Coments;
