import React from "react";
import { Box, Card, Rating, Typography } from "@mui/material";
import snowyMountain from "../../images/backgrounds/snowyMountain.jpg";
import "./populars-style.css";
import EventIcon from "@mui/icons-material/Event";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import PeopleIcon from "@mui/icons-material/People";
import SavingsIcon from '@mui/icons-material/Savings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CenteredBox } from "../styledComponents/styledComponents";
import { StyledButton } from "../styledComponents/styledComponents";
import { populars } from "./populars-cards";
import { Swiper, SwiperSlide } from "swiper/react";
import {  Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const Populars = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url(${snowyMountain})`,
      }}
    >
      <Box
        className="typo3"
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
            textAlign: "center",
          }}
        >
          Travel far enough , meet yourself
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{
            fontSize: "2rem",
            fontFamily: "Raleway",
            color: "#555",
            textAlign: "center",
          }}
        >
          MOST POPULAR TOURS
        </Typography>
      </Box>
      <Box
        className="populars"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexFlow="row wrap"
      >
        <Swiper className="swiper-container" spaceBetween={30} modules={[Pagination]} slidesPerView={1} pagination={{clickable:'true'}} speed={200}
          breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1120: {
              width: 1120,
              slidesPerView: 3,
            },
          }}>
           {populars.map(popular => {
          return <SwiperSlide className="swiper-slide" key={popular.id}> <Card className="cards" 
          sx={{ maxWidth: { xl: "25rem", xs: "21rem" }, minHeight: "47rem" }}
        >
          <Box
            display="flex"
            alignItems="flex-end"
            flexFlow="column wrap"
            justifyContent="flex-start"
            sx={{
              width: "100%",
              height: "20rem",
              backgroundImage: `url(${popular.bcg})`,
              backgroundSize: "cover",
            }}
          >
            <Box p={2}>
              <Typography
                sx={{
                  color: "white",
                  fontFamily: "Manjari",
                  fontSize: "1.25rem",
                }}
              >
               {popular.title}
              </Typography>
              <Rating
                defaultValue={popular.rating}
                precision={0.5}
                readOnly
                size="small"
              />
            </Box>
          </Box>

          <Box display="flex">
            <CenteredBox flex={1} border="1px solid #d9d9d9" borderRight="none">
              <EventIcon />
              <Typography fontFamily="Playfair Display" fontWeight="bold" p={1}>
                {popular.days}
              </Typography>{" "}
            </CenteredBox>
            <CenteredBox flex={1} border="1px solid #d9d9d9" borderRight="none">
              {popular.type==='Exotic'?<StarOutlineIcon />:popular.type==='On Budget'?<SavingsIcon />:popular.type==='Romantic'?<FavoriteIcon />: null}
              <Typography fontFamily="Playfair Display" fontWeight="bold" p={1}>
                {popular.type}
              </Typography>{" "}
            </CenteredBox>
            <CenteredBox flex={1} border="1px solid #d9d9d9" borderRight="none">
              <PeopleIcon />
              <Typography fontFamily="Playfair Display" fontWeight="bold" p={1}>
                {popular.age}
              </Typography>{" "}
            </CenteredBox>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="space-around"
            sx={{ height: "22rem" }}
          >
            <Typography
              textAlign="center"
              color="gray"
              fontFamily="Manjari"
              fontSize="1.2rem"
            >
              <span style={{ color: "#d9581c", fontSize: "1.6rem" }}>{popular.price}</span>
              /Person
            </Typography>
            <Typography
              textAlign="center"
              color="gray"
              fontFamily="Manjari"
              fontSize="1.2rem"
            >
              {popular.about}
            </Typography>
            <StyledButton
              sx={{
                marginTop: "0",
                backgroundColor: "white",
                color: "#555",
                borderRadius: "3rem",
                border:'1px solid #555',
                "&:hover": {
                  backgroundColor: "black",
                  color: "white",
                },
              }}
            >
              BOOK NOW
            </StyledButton>
          </Box>
        </Card> </SwiperSlide>
        })}
        </Swiper>
       
        
      </Box>
    </Box>
  );
};

export default Populars;
