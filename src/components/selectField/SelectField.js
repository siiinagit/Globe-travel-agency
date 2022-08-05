import { Box, Button, InputAdornment, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import React from "react";
import { MenuBox, SelectBox } from "../styledComponents/styledComponents";
import ExploreIcon from '@mui/icons-material/Explore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import FlightIcon from '@mui/icons-material/Flight';
import ApartmentIcon from '@mui/icons-material/Apartment';

const SelectField = () => {
  return (
    <Box
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" , minHeight:'20vh'}}
    >
      
        
      
      <SelectBox sx={{width:{xl:'70%',xs:'90%'}, flexFlow:{xl:'row wrap',xs:'column nowrap'}, marginTop:'1rem'}}>
      
        <MenuBox flex={1}>
          <TextField fullWidth placeholder="Where to ?" InputProps={{startAdornment:(<InputAdornment position='start'><ExploreIcon /></InputAdornment>)}} sx={{'& input::placeholder':{fontFamily:'Manjari', fontSize:'1.2rem'}}}/>
        </MenuBox>
        <MenuBox flex={1}>
          
          <TextField select label='Month' InputProps={{startAdornment:(<InputAdornment position='start'><CalendarMonthIcon /></InputAdornment>)}} fullWidth >
            <MenuItem value='Januar'>Januar</MenuItem>
            <MenuItem value='Februar'>Februar</MenuItem>
            <MenuItem value='Mart'>Mart</MenuItem>
            <MenuItem value='April'>April</MenuItem>
            <MenuItem value='Maj'>Maj</MenuItem>
            <MenuItem value='Jun'>Jun</MenuItem>
            <MenuItem value='Jul'>Jul</MenuItem>
            <MenuItem value='Avgust'>Avgust</MenuItem>
            <MenuItem value='Septembar'>Septembar</MenuItem>
            <MenuItem value='Oktobar'>Oktobar</MenuItem>
            <MenuItem value='Novembar'>Novembar</MenuItem>
            <MenuItem value='Decembar'>Decembar</MenuItem>
          </TextField>
        </MenuBox>
        <MenuBox flex={1}>
          <TextField select  label='Transport' InputProps={{startAdornment:(<InputAdornment position='start'><FlightIcon /></InputAdornment>)}} fullWidth>
            <MenuItem value='Airplane'>Airplane</MenuItem>
            <MenuItem value='Autobus'>Autobus</MenuItem>
            <MenuItem value='Ship'>Ship</MenuItem>
            <MenuItem value='Train'>Train</MenuItem>
            <MenuItem value='Private car'>Private car</MenuItem>
          </TextField>
        </MenuBox>
        <MenuBox flex={1}>
          <Button fullWidth sx={{height:'3.45rem', backgroundColor:'#f5700a',color:'white',border:'none','&:hover':{backgroundColor:'black',color:'white'}}}>Find Now</Button>
        </MenuBox>
      </SelectBox>
    </Box>
  );
};

export default SelectField;
