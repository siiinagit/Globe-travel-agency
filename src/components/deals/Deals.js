import React from "react";
import { Box, Typography } from "@mui/material";
import "./deals-style.css";
import { CoverLink } from "../styledComponents/styledComponents";

const Deals = () => {
  return (
    <Box sx={{ minHeight: "120vh" }}>
      <Box
        className="typo"
        sx={{
          width: "100%",
          minHeight: "20vh",
          display: "flex",
          flexFlow: "column wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="body2"
          component="h3"
          sx={{
            fontSize: { xl: "1.9rem", xs: "1.6rem" },
            fontFamily: "Dancing Script",
            color: "#d40b0b",
          }}
        >
          Last minute offer for you
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "2rem", fontFamily: "Raleway", color: "#555" }}
        >
          DEALS & DISCOUNT
        </Typography>
      </Box>
      <Box
        className="pics"
        sx={{
          width: "100%",
          minHeight: "100vh",
          padding: { xl: "0.5rem 3rem", xs: "0 1rem" },
        }}
      >
        <Box className="container">
          <CoverLink className="area1" href="#" underline="none" color>
            <Typography
              sx={{ color: "red", fontSize: { xl: "2rem", xs: "1rem" } }}
            >
              $400
            </Typography>
            <Typography
              sx={{
                fontSize: { xl: "2rem", xs: "1rem" },
                fontWeight: "bold",
                fontFamily: "Raleway",
              }}
            >
              Exploring the mounting nature
            </Typography>
            <Typography
              sx={{ color: "#faeeed", fontSize: { xl: "1.4rem", xs: ".66rem" } }}
            >
              Enjoy fresh air, healthy food-real life
            </Typography>
          </CoverLink>
          <CoverLink className="area2" href="#" underline="none" color>
            <Typography
              sx={{ color: "red", fontSize: { xl: "2rem", xs: "1rem" } }}
            >
              $1000
            </Typography>
            <Typography
              sx={{
                fontSize: { xl: "2rem", xs: "1rem" },
                fontWeight: "bold",
                fontFamily: "Raleway",
              }}
            >
              San Francisko
            </Typography>
            <Typography
              sx={{ color: "#faeeed", fontSize: { xl: "1.4rem", xs: ".66rem" } }}
            >
              Golden gate bridge, Alcatraz, museums and much more
            </Typography>
          </CoverLink>
          <CoverLink className="area3" href="#" underline="none" color>
            <Typography
              sx={{ color: "red", fontSize: { xl: "2rem", xs: "1rem" } }}
            >
              $200
            </Typography>
            <Typography
              sx={{
                fontSize: { xl: "2rem", xs: "1rem" },
                fontWeight: "bold",
                fontFamily: "Raleway",
              }}
            >
              Serbia
            </Typography>
            <Typography
              sx={{ color: "#faeeed", fontSize: { xl: "1.4rem", xs: ".66rem" } }}
            >
              Vojvodina, Sumadija, Pomoravlje
            </Typography>
          </CoverLink>
          <CoverLink className="area4" href="#" underline="none" color>
            <Typography
              sx={{ color: "red", fontSize: { xl: "2rem", xs: "1rem" } }}
            >
              $600
            </Typography>
            <Typography
              sx={{
                fontSize: { xl: "2rem", xs: "1rem" },
                fontWeight: "bold",
                fontFamily: "Raleway",
              }}
            >
              Norway
            </Typography>
            <Typography
              sx={{ color: "#faeeed", fontSize: { xl: "1.4rem", xs: ".66rem" } }}
            >
              Stunning fjords. Small, cosy cities. Adventures under the midnight sun.
            </Typography>
          </CoverLink>
        </Box>
      </Box>
    </Box>
  );
};

export default Deals;
