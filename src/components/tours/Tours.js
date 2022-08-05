import {
  Box,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
} from "@mui/material";
import React from "react";
import "./tours-style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { toursCards } from "./tours-cards";

const Tours = () => {
  return (
    <Box sx={{ minHeight: "90vh" }}>
      <Box
        className="typo2"
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
          Many places for your trip
        </Typography>
        <Typography
          variant="h3"
          component="h3"
          sx={{ fontSize: "2rem", fontFamily: "Raleway", color: "#555" }}
        >
          TOUR CATEGORIES
        </Typography>
      </Box>
      <Box
        className="cardscroll"
        sx={{
          display: "flex",
          alignItems: "center",
          minHeight: "63vh",
          width: { xl: "75%", xs: "93%" },
          margin: "0 auto",
          padding:'5px',
        }}
      >
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          speed={200}
          className="swiper-container"
          slidesPerView={1}
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
          }}
        >
          {toursCards.map((card) => {
            return (
              <SwiperSlide key={card.id} className="slider">
                <Card
                  sx={{
                    maxWidth: "18rem",
                    height: "35rem",
                    display: "flex",
                    flexFlow: "row wrap",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                  }}
                >
                  <CardContent sx={{ padding: "0" }}>
                    
                    <img
                      src={card.img}
                      alt="belgrade"
                      style={{
                        width: "200px",
                        height: "200px",
                        borderRadius: "100%",
                        objectFit: "cover",
                        
                      }}
                    />
                  </CardContent>
                  <Typography
                    sx={{
                      fontSize: "1.4rem",
                      fontWaight: "bold",
                      fontFamily: "Playfair Display",
                      textAlign: "center",
                    }}
                  >
                    {card.naslov}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "1.02rem",
                      color: "gray",
                      opacity: ".88",
                      fontFamily: "Raleway",
                      padding: "5px",
                      textAlign: "center",
                    }}
                  >
                    {card.opis}
                  </Typography>
                  <CardActions>
                    <Button
                      sx={{
                        backgroundColor: "white",
                        color: "#555",
                        border: "1px solid #d9d9d9",
                        "&:hover": {
                          backgroundColor: "black",
                          color: "white",
                        },
                      }}
                    >
                      READ MORE
                    </Button>
                  </CardActions>
                </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
    </Box>
  );
};

export default Tours;
