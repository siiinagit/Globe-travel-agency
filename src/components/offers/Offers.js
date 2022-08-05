import { Box, Button, Typography } from "@mui/material";
import {
  OfferBox,
  StyledButton,
} from "../styledComponents/styledComponents";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper";
import 'swiper/css';
import 'swiper/css/navigation';
import maldivi from "../../images/cardImages/maldivi.jpg";
import paris from "../../images/cardImages/paris.jpg";
import london2 from "../../images/cardImages/london2.jpg";
import mountains from "../../images/cardImages/mountains.jpg";
import "./offers-style.css";

const offersList = [
  {
    id: "0",
    offer: "Discount 50%",
    price: "$150",
    title: "Maldives",
    subtitle: "Feel every inch of beautiful beaches",
    image: maldivi,
  },
  {
    id: "1",
    offer: "Special offer",
    price: "$700",
    title: "Autumn in Paris",
    subtitle: "Romantic trip in city full of colors",
    image: paris,
  },
  {
    id: "2",
    offer: "Special offer",
    price: "$400",
    title: "Charming London",
    subtitle: " Enjoying beautiful views across the river to Battersea ",
    image: london2,
  },
  {
    id: "3",
    offer: "Special offer",
    price: "$650",
    title: "Scandinavian Mountains",
    subtitle:
      "The western sides of the mountains drop precipitously into the North Sea",
    image: mountains,
  },
];

const Offers = () => {
  return (
    <Box minHeight="120vh">
      <Box
        className="natpis"
        fontSize={{ xl: "10rem", xs: "2rem" }}
        fontFamily="Raleway"
        fontWeight="bold"
        textAlign="center"
        color="GrayText"
        sx={{
          position: { xl: "relative", xs: "unset" },
          top: "50px",
          opacity: "36%",
        }}
      >
        LAST MINUTES
      </Box>
      <Swiper modules={[Navigation]} navigation slidesPerView={1} initialSlide={2}
          breakpoints={{
            640: {
              
              slidesPerView: 1,
            },
            768: {
              
              slidesPerView: 2,
            },
            1120: {
              
              slidesPerView: 3,
            },
          }}>
        {offersList.map((offer) => {
          return (
            <SwiperSlide key={offer.id}>
              <OfferBox
              
              className="offerbox"
              sx={{
                backgroundImage: `url(${offer.image})`,
                backgroundSize: "cover",
                width:'100%'
              }}
            >
              <Box display="flex" alignItems="center" justifyContent="flex-end">
                <Button sx={{background:'linear-gradient(90deg, rgba(196,120,12,1) 46%, rgba(191,205,145,1) 100%)', width:'7rem', height:'2rem'}}><Typography fontSize='.75rem' color='white'>{offer.offer}</Typography></Button>
              </Box>
              <Box>
                <Typography color='#c4240c' fontSize='3rem' fontFamily='Halant' fontWeight='bold'>{offer.price}</Typography>
                <Typography color='#fff' fontSize='3rem' fontFamily='Halant' fontWeight='bold'>{offer.title}</Typography>
                <Typography color="#fff">{offer.subtitle}</Typography>
              </Box>
            </OfferBox>
            </SwiperSlide>
            
          );
        })}
      </Swiper>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-around"
        sx={{ backgroundColor: "#f5700a", height: { xl: "10vh", xs: "20vh" } }}
      >
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-around"
          flexDirection={{ xl: "row", xs: "column" }}
          width="75%"
        >
          <Typography
            color="white"
            fontWeight="bold"
            fontFamily="Manjari"
            fontSize="1.5rem"
          >
            How Beautiful Is To Do Nothing And Then Rest
          </Typography>
          <StyledButton
            sx={{
              backgroundColor: "white",
              color: "black",
              marginTop: "0",
              "&:hover": {
                bgcolor: "#f5700a",
                color: "white",
                border: "1px solid white",
              },
            }}
          >
            <Typography fontWeight="bold" fontFamily="Halant" fontSize="1.2rem">
              Subscribe
            </Typography>
          </StyledButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Offers;
