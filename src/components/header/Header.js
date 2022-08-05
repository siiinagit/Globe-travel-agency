import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Badge,
  IconButton,
  SwipeableDrawer,
  Divider,
  List,
  ListItem,
  Menu,
  Modal,
  Input,
  MenuItem,
} from "@mui/material";
import logo3 from "../../images/logo/logo3.png";
import { StyledLinks, UnderLinks } from "../styledComponents/styledComponents";
import { InputBox } from "../styledComponents/styledComponents";
import {
  Search,
  ShoppingBagOutlined,
  CloseOutlined,
} from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorElc, setAnchorElc] = useState(null);

  const openMenue = Boolean(anchorEl);
  const openMenuc = Boolean(anchorElc);

  const handleClickc= (e) => {
    setAnchorElc(e.currentTarget);
  };
  const handleClosec = (e) => {
    setAnchorElc(null);
  };

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const navLinks = [
    { name: "Home", id: "0" },
    {
      name: "Tour .",
      id: "1",
      onClick: handleClick,
      underlist: [
        { und: "Tour" },
        { und: "Date & Pricing" },
        { und: "Destination" },
        { und: "Discount" },
      ],
    },
    {
      name: "Blog .",
      id: "2",
      onClick: handleClickc,
      underlist: [{ und: "List" }, { und: "Details" }],
    },
    { name: "Services", id: "3" },
    { name: "About Us", id: "4" },
    { name: "Contact", id: "5" },
  ];
  return (
    <div className="header">
      <AppBar position="absolute" elevation={0} color='transparent' >
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            flexFlow: "row wrap",
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Box
            flex={3}
            sx={{
              display: "flex",
              flexFlow: "row nowrap",
              alignItems: "flex-start",
              justifyContent: "flex-start",
              marginLeft: { xl: "5rem", xs: "1.5rem" },
            }}
          >
            <Avatar
              src={logo3}
              sx={{
                width: { xl: "110px", xs: "80px" },
                height: { xl: "80px", xs: "50px" },
              }}
            />

            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontFamily: "Edu QLD Beginner",
                  fontSize: { xl: "2.3rem", md: "1.2rem", xs: "2.2rem" },
                  fontWeight: "bold",
                  color:'white'
                }}
              >
                Globe
              </Typography>
              <Typography
                variant="subtitle1"
                component="span"
                sx={{
                  fontFamily: "Edu QLD Beginner",
                  fontSize: { xl: "1.3rem", xs: "1rem" },
                  fontWeight: "bold",
                  display: { xs: "none", xl: "block" },
                  color:'white'
                }}
              >
                travel agency
              </Typography>
            </Box>
          </Box>
          <Box
            flex={3}
            sx={{
              display: { xl: "flex", md: "flex", xs: "none" },
              alignItems: "center",
              justifyContent: "center",
              marginLeft: "auto",
            }}
          >
            {navLinks.map((nav) => {
              return (
                <StyledLinks
                  id="tour-button"
                  aria-controls={openMenue ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={openMenue ? "true" : undefined}
                  key={nav.id}
                  href="#"
                  underline="none"
                  color={true}
                  onClick={nav.onClick}
                >
                  {nav.name}
                </StyledLinks>
              );
            })}
          </Box>
          <Box
            flex={3}
            sx={{
              display: "flex",
              flexFlow: "row wrap",
              alignItems: "flex-start",
              justifyContent: "flex-end",
              marginRight: { xl: "5rem", xs: "1rem" },
            }}
          >
            <IconButton onClick={() => setOpenModal(true)}>
              <Search sx={{ fontSize: "2rem",color:'white' }} />
            </IconButton>
            <IconButton>
              <Badge badgeContent="0" color="success">
                <ShoppingBagOutlined sx={{ fontSize: "2rem",color:'white' }} />
              </Badge>
            </IconButton>
          </Box>

          <Box
            sx={{
              display: { xl: "none", md: "none", xs: "block" },
              marginLeft: "auto",
            }}
          >
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon sx={{ marginRight: "10px",color:'white' }} />
            </IconButton>
          </Box>
        </Toolbar>
        <SwipeableDrawer
          anchor="right"
          open={open}
          onOpen={() => setOpen(true)}
          onClose={() => setOpen(false)}
        >
          <IconButton onClick={() => setOpen(false)}>
            <CloseOutlined />
          </IconButton>

          <Divider />
          <List sx={{backgroundColor:'gray', height:'100vh'}}>
            {navLinks.map((nav) => {
              return (
                <Box
                  key={nav.id}
                  sx={{ display: "flex", flexFlow: "column wrap",backgroundColor:'gray' }}
                >
                  <StyledLinks>{nav.name}</StyledLinks>
                  <ListItem
                    sx={{
                      display: "flex",
                      flexFlow: "column wrap",
                      alignItems: "flex-start",
                      justifyContent: "space-evenly",
                    }}
                  >
                    {nav.underlist?.map((und, index) => {
                      return (
                        <Box key={index}>
                          <UnderLinks underline="none" href="#" color={true}>
                            {und.und}
                          </UnderLinks>
                        </Box>
                      );
                    })}
                  </ListItem>
                </Box>
              );
            })}
          </List>
        </SwipeableDrawer>
        <Modal open={openModal} onClose={() => setOpenModal(false)}>
          <InputBox>
            <Input
              disableUnderline
              sx={{ borderBottom: "3px solid white", color: "whitesmoke", fontSize:'1.5rem' }}
              placeholder="search..."
            />
            <IconButton>
              <Search sx={{ color: "white", width: "2rem", height: "2rem" }} />
            </IconButton>
          </InputBox>
        </Modal>
        <Menu
          id="tour-menu"
          aria-labelledby="tour-button"
          anchorEl={anchorEl}
          open={openMenue}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Tour</MenuItem>
          <MenuItem onClick={handleClose}>Date & Pricing</MenuItem>
          <MenuItem onClick={handleClose}>Discount</MenuItem>
          <MenuItem onClick={handleClose}>Destination</MenuItem>
        </Menu>
        <Menu  id="blog-menu"
        aria-labelledby="blog-button"
          anchorEl={anchorElc}
          open={openMenuc}
          onClose={handleClosec}>
          <MenuItem onClick={handleClosec}>List</MenuItem>
          <MenuItem onClick={handleClosec}>Details</MenuItem>
        </Menu>
      </AppBar>
    </div>
  );
};

export default Header;
