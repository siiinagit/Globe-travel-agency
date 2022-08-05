import React from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./parallax-style.css";
import mob from '../../images/misc/mob.png'

const Parallax = () => {
  return (
    <Box minHeight="60vh" display="flex" flexDirection={{xl:'row', xs:'column'}} className="parallax">
      <Box
        position="relative"
        display="flex"
        flex="1"
        flexDirection="column"
        alignItems={{xl:"flex-end", xs:'center'}} 
        justifyContent="center"
        sx={{backgroundImage:{xs:`url(${mob})`, backgroundRepeat:'no-repeat',backgroundSize:'250px', xl:'none'},backgroundPosition:{xl:'25px 100px',xs:'25px 180px'}}}
      >
        <Box
         
          height="15rem"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          <Typography
            sx={{
              textAlign: "center",
              fontSize: { xl: "2.4rem", xs: "2rem" },
              fontFamily: "Dancing Script",
              color: "#d40b0b",
            }}
          >
            They were more than just guides
          </Typography>
          <Typography
            sx={{
              color: "white",
              textAlign: "center",
              fontFamily: "Manjari",
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          >
            Subscribe for travel tips.
          </Typography>

          <Box component="form" noValidate autocomlete="off">
            <TextField
              variant="outlined"
              sx={{
                width:{xl:"20rem",xs:'100%'} ,
                backgroundColor: "white",
                borderTopLeftRadius: "12px",
                borderBottomLeftRadius: "12px",
                borderTopRightRadius: { xl: "0", xs: "12px" },
                borderBottomRightRadius: { xl: "0", xs: "12px" },
              }}
              inputProps={{
                sx: {
                  height: "1.2rem",
                  "& label.Mui-focused": {
                    color: "red",
                  },
                },
              }}
              placeholder="Your Email"
            />
            <Button
              sx={{
                backgroundColor: "#d9581c",
                color: "white",
                width:{xl:"9rem", xs:'100%'} ,
                height: "3.27rem",
                borderTopRightRadius: "12px",
                borderBottomRightRadius: "12px",
                borderTopLeftRadius:{xl:"0px", xs:'12px'} ,
                borderBottomLeftRadius: {xl:"0px", xs:'12px'},
                "&:hover": { backgroundColor: "#d9581c" },
              }}
            >
              <Typography
                fontFamily="Halant"
                fontSize="1.2rem"
                fontWeight="bold"
              >
                Subscribe
              </Typography>
            </Button>
          </Box>
        </Box>
      </Box>
      <Box flex="1" position='relative' sx={{backgroundImage:`url(${mob})`, backgroundRepeat:'no-repeat',backgroundSize:'350px',  backgroundPosition:'center', display:{xs:'none',xl:'flex'}}}>
        
      </Box>
    </Box>
  );
};

export default Parallax;
