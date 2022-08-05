import React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import village from "../../images/cardImages/village.jpg";
import paris2 from "../../images/cardImages/paris2.jpg";
import sea from "../../images/cardImages/sea.jpg";
import "./memories-style.css";
import DateRangeIcon from "@mui/icons-material/DateRange";
import ForumIcon from "@mui/icons-material/Forum";

const Memories = () => {
  return (
    <Box minHeight="80vh">
      <Box
        className="naslov"
        minHeight="20vh"
        sx={{
          display: "flex",
          flexFlow: "column wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: { xl: "1.9rem", xs: "1.6rem" },
            fontFamily: "Dancing Script",
            color: "#d40b0b",
          }}
        >
          Keep memories
        </Typography>
        <Typography
          sx={{
            fontSize: { xl: "4rem", xs: "2.5rem" },
            fontFamily: "Raleway",
            fontWeight: "bold",
            color: "#555",
            letterSpacing: { xl: "1px", xs: "5px" },
          }}
        >
          latest posts
        </Typography>
      </Box>
      <Box
        className="karte"
        minHeight="60vh"
        sx={{
          display: "flex",
          flexFlow: "row wrap",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "85rem",
            marginTop: "20px",
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Card
          elevation={6}
            sx={{
              width: { xl: "25rem", xs: "22rem" },
              height: "30rem",
              marginBottom: "10px",
              display:'flex',
              flexFlow:'column wrap',
              justifyContent:'space-between',
              alignItems:{xl:'normal', xs:'center'},
              cursor:'pointer'
            }}
          >
            <CardMedia
              component="img"
              height="250px"
              width="100%"
              image={paris2}
            />
            <CardContent sx={{ padding: "25px" }}>
              <Typography
                textAlign="center"
                fontWeight="bold"
                fontSize={{ xl: "1.3rem", xs: "1.1rem" }}
                fontFamily="Manjari"
              >
                Experience holidays in Paris and find the best time to go and
                the best places to visit.
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexFlow: "row wrap",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Box
                width="8rem"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <DateRangeIcon fontSize="2rem" sx={{ color: "orange" }} />
                <Typography textAlign="center" fontFamily='Halant'> 20 July, 2022</Typography>
              </Box>
              <Box
                width="8rem"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <ForumIcon fontSize="2rem" sx={{ color: "orange" }} />
                <Typography textAlign="center" fontFamily='Halant'> 03 comments</Typography>
              </Box>
            </CardContent>
          </Card>
          <Card
          elevation={6}
            sx={{
              width: { xl: "25rem", xs: "22rem" },
              height: "30rem",
              marginBottom: "10px",
              display:'flex',
              flexFlow:'column wrap',
              justifyContent:'space-between',
              alignItems:{xl:'normal', xs:'center'},
              cursor:'pointer'
            }}
          >
            <CardMedia
              component="img"
              height="250px"
              width="100%"
              image={village}
            />
            <CardContent sx={{ padding: "25px" }}>
              <Typography
                textAlign="center"
                fontWeight="bold"
                fontSize={{ xl: "1.3rem", xs: "1.1rem" }}
                fontFamily="Manjari"
              >
                Discover Switzerland and get tips where to go and what to do.
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexFlow: "row wrap",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Box
                width="8rem"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <DateRangeIcon fontSize="2rem" sx={{ color: "orange" }} />
                <Typography textAlign="center" fontFamily='Halant'> 08 June, 2022</Typography>
              </Box>
              <Box
                width="8rem"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <ForumIcon fontSize="2rem" sx={{ color: "orange" }} />
                <Typography textAlign="center" fontFamily='Halant'> 06 comments</Typography>
              </Box>
            </CardContent>
          </Card>
          <Card
          elevation={6}
            sx={{
              width: { xl: "25rem", xs: "22rem" },
              height: "30rem",
              marginBottom: "10px",
              display:'flex',
              flexFlow:'column wrap',
              justifyContent:'space-between',
              alignItems:{xl:'normal', xs:'center'},
              cursor:'pointer'
            }}
          >
            <CardMedia
              component="img"
              height="250px"
              width="100%"
              image={sea}
            />
            <CardContent>
              <Typography
                textAlign="center"
                fontWeight="bold"
                fontSize={{ xl: "1.3rem", xs: "1.1rem" }}
                fontFamily="Manjari"
              >
                The coastal waters of the Gulf of Mexico are used extensively
                for sport fishing, especially for red snappers, flounder, and
                tarpon.
              </Typography>
            </CardContent>
            <CardContent
              sx={{
                display: "flex",
                flexFlow: "row wrap",
                alignItems: "center",
                justifyContent: "space-around",
              }}
            >
              <Box
                width="8rem"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <DateRangeIcon fontSize="2rem" sx={{ color: "orange" }} />
                <Typography textAlign="center" fontFamily='Halant'> 14 May, 2022</Typography>
              </Box>
              <Box
                width="8rem"
                display="flex"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <ForumIcon fontSize="2rem" sx={{ color: "orange" }} />
                <Typography textAlign="center" fontFamily='Halant'> 13 comments</Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
};

export default Memories;
