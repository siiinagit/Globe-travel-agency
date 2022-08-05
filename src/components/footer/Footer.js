import { Box, Stack, Typography, Avatar, ImageList, ImageListItem } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import MapIcon from "@mui/icons-material/Map";
import logo3 from "../../images/logo/logo3.png";
import './footer-style.css'
import img1 from '../../images/backgrounds/italy.jpg'
import img2 from '../../images/backgrounds/mountain.jpg'
import img3 from '../../images/backgrounds/norway.jpg'
import img4 from '../../images/backgrounds/roma.jpg'

const Footer = () => {
  return (
    <Box
      minHeight="80vh"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent={{xl:"space-between",xs:'space-around'}}
      sx={{ backgroundColor: "#282525" }}
    >
      <Stack
        direction={{ xs: "column", xl: "row" }}
        spacing={5}
        width={{ xl: "75%", xs: "100%" }}
        minHeight="70vh"
      >
        <Stack
          spacing={1.5}
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          sx={{ color: "#cecedb" }}
        >
          <Box display="flex" alignItems="center" marginBottom={{xl:"3rem",xs:'1.2rem'}}>
            <Avatar
              src={logo3}
              sx={{
                width: { xl: "100px", xs: "70px" },
                height: { xl: "70px", xs: "40px" },
              }}
            />
            <Typography fontSize="2.3rem" fontWeight="bold">
              Globe <Typography component='span' display='block' fontSize="1.3rem">travel agency</Typography>
            </Typography>
          </Box>
          <Box>
            <Typography fontSize=".88rem" sx={{ color: "GrayText" }}>
              Everything was seamless. The private guides were interesting
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <MapIcon sx={{ color: "#f5700a" }} />
            <Typography fontSize=".88rem" p={0.3} sx={{ color: "GrayText" }}>
              Grand Conference Hall - 881 7th Ave New York
            </Typography>{" "}
          </Box>
          <Box display="flex" alignItems="center">
            <PhoneIcon sx={{ color: "#f5700a" }} />
            <Typography fontSize=".88rem" p={0.3} sx={{ color: "GrayText" }}>
              + 1902 33 39 00
            </Typography>{" "}
          </Box>
          <Box display="flex" alignItems="center">
            <EmailIcon sx={{ color: "#f5700a" }} />{" "}
            <Typography fontSize=".88rem" p={0.3} sx={{ color: "GrayText" }}>
              info@globe.com
            </Typography>
          </Box>
        </Stack>
        <Stack
          spacing={1.5}
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          
        >
          <Typography fontSize="2.3rem" fontWeight="bold" marginBottom={{xl:"3rem",xs:'1.2rem'}} sx={{ color: "#cecedb" }}>
            Links
          </Typography>
          <Stack spacing={2} component='ul' className="ul-lista">
            <Typography fontSize=".88rem">
              <li className="li-lista">Tour Paris City</li>
            </Typography>
            <Typography fontSize=".88rem">
              <li className="li-lista">Tour London City</li>
            </Typography>
            <Typography fontSize=".88rem">
              <li className="li-lista">Tour Belgrade City</li>
            </Typography>
            <Typography fontSize=".88rem">
              <li className="li-lista">Tour Rome City</li>
            </Typography>
            <Typography fontSize=".88rem">
              <li className="li-lista">Tour New York City</li>
            </Typography>
          </Stack>
        </Stack>
        <Stack spacing={{xl:3.5,xs:1}}
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          sx={{ color: "#cecedb" }}>
              <Typography fontSize="2.3rem" fontWeight="bold" marginBottom={{xl:"3rem",xs:'1.2rem'}}>Twitter Feed</Typography>
              <Box display="flex" alignItems="center"><TwitterIcon sx={{ color: "#f5700a" }}/><Typography fontSize=".88rem" p={1.3} sx={{ color: "GrayText" }}>Start creating with Kreate - Expert Theme for Creative Business<Typography component='span' display='block' className="links" >#Material Design #Theme</Typography></Typography></Box>
              <Box display="flex" alignItems="center"><TwitterIcon sx={{ color: "#f5700a" }}/><Typography fontSize=".88rem" p={1.3} sx={{ color: "GrayText" }}>Need a blog? Tomas & Daisy - A Stylish Blog for Him and Her: <Typography component='span' display='block' className="links" >https://siinablogs.co</Typography></Typography></Box>
        </Stack>
        <Stack spacing={{xl:3.5,xs:1}}
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          sx={{ color: "#cecedb" }}>
            <Typography fontSize="2.3rem" fontWeight="bold" marginBottom={{xl:"1.2rem",xs:'1.2rem'}}>Instagram</Typography>
            <ImageList  cols={2} rowHeight={129} gap={7}>
              <ImageListItem><img src={img1} alt='test1'/></ImageListItem>
              <ImageListItem><img src={img2} alt='test2'/></ImageListItem>
              <ImageListItem><img src={img3} alt='test3'/></ImageListItem>
              <ImageListItem><img src={img4} alt='test4'/></ImageListItem>
            </ImageList>
          </Stack>
      </Stack>
      <Box
        width={{ xl: "75%", xs: "100%" }}
        height="10vh"
        display="flex"
        flexDirection={{ xs: "column-reverse", xl: "row" }}
        alignItems="center"
        justifyContent={{xl:"space-between", xs:'space-around'}}
      >
        <Typography sx={{ color: "GrayText" }}>
          © Globe travel agency. All right reserved 2022.
        </Typography>
        <Box
          width="10rem"
          display="flex"
          alignItems="center"
          justifyContent="space-around"
        >
          <FacebookIcon sx={{ color: "GrayText", cursor:'pointer' }} />{" "}
          <TwitterIcon sx={{ color: "GrayText", cursor:'pointer' }} />{" "}
          <InstagramIcon sx={{ color: "GrayText", cursor:'pointer' }} />{" "}
          <YouTubeIcon sx={{ color: "GrayText", cursor:'pointer' }} />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
