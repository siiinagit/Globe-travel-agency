import { Box, IconButton, Typography,Modal } from "@mui/material";
import { PlayButton, StyledButton } from "../styledComponents/styledComponents";
import "./video-style.css";
import videoBackground from "../../images/backgrounds/videoBackground.jpg";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";


const VideoPresent = () => {
  const [open,setOpen] = useState(false)

  const openModal =() => setOpen(true)
  const closeModal =() => setOpen(false)
  return (
    <Box
      minHeight={{ xl: "75vh", xs: "100vh" }}
      sx={{ display: "flex", flexFlow: { xl: "row wrap", xs: "column wrap" } }}
    >
      <Box
        className="title"
        sx={{
          display: "flex",
          flexFlow: "column wrap",
          alignItems: { xl: "flex-end", xs: "center" },
          justifyContent: "space-evenly",
          paddingRight: { xl: "5rem", xs: "0" },
          width: { xl: "50%", xs: "100%" },
        }}
      >
        <Box width={{ xl: "24rem", xs: "20rem" }} textAlign="center">
          <Typography fontWeight="bold" fontSize="2.3rem" fontFamily="Manjari">
            WATCH OUR VIDEO
          </Typography>
          <Typography
            fontFamily="Edu QLD Beginner"
            fontSize="1.5rem"
            color="#f5700a"
          >
            take a tour
          </Typography>
        </Box>
        <Box width={{ xl: "24rem", xs: "20rem" }} textAlign="center">
          <Typography color="GrayText" fontFamily="Raleway" fontWeight="bold">
            Everything was seamless. The private guides were interesting and
            knowledgeable. We felt that they were more than just guides.
          </Typography>
          <StyledButton sx={{ marginBottom: { xl: "0", xs: "1rem" } }}>
            ABOUT US
          </StyledButton>
        </Box>
      </Box>

      <Box
        className="video"
        sx={{
          backgroundImage: `url(${videoBackground})`,
          backgroundSize: "cover",
          minWidth: { xl: "40rem", xs: "22.3rem" },
          minHeight: { xl: "45rem", xs: "23rem" },
        }}
      >
        <PlayButton
          sx={{
            width: { xl: "100px", xs: "70px" },
            height: { xl: "100px", xs: "70px" },
            left: { xl: "-7%", xs: "40%" },
            top:{xl:'18.5rem',xs:"10rem"} ,
          }}
          onClick={openModal}
        >
          <IconButton sx={{ width: "100%", height: "100%", color: "black" }}>
            <PlayArrowIcon sx={{ height: "8rem", width: "3rem", '&:hover':{
    color:'#f5700a'
  } }} />
          </IconButton>
        </PlayButton>
      </Box>
      <Modal open={open} onClose={closeModal}>
        <Box sx={{ position: 'absolute',
  top:{xl:'50%',xs:'72%'} ,
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width:{xl:'80rem',md:'60rem',xs:'22.2rem'} ,
  height:{xl:'40rem',md:'30rem',xs:'23rem'}}}>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/K1QICrgxTjA?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </Box>
      </Modal>
    </Box>
  );
};

export default VideoPresent;
