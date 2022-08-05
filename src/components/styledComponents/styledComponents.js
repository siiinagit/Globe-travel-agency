import { styled, Link, Box, Typography, Button, FormControl } from "@mui/material";

const fontovi = {
  dancing: "Dancing Script",
  edu: "Edu QLD Beginner",
  halant: "Halant",
  manjari: "Manjari",
  playfair: "Playfair Display",
  raleway: "Raleway",
};


export const StyledLinks= styled(Link)({
  color:'white',
  marginLeft:'10px',
  fontSize:'1.2rem',
  padding:'5px',
  fontFamily: fontovi.playfair,
  fontWaight:'bold',
  '&:hover': {
    borderTop:'2px solid #dd5500'
  }
})

export const UnderLinks = styled(Link)({
  color:'white',
  fontSize:'0.9rem',
  padding:'5px',
  fontFamily: fontovi.playfair,
})

export const InputBox = styled(Box)({
  position: "absolute",
  top: "25%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  padding:'8px',
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border:'1px solid white',
  borderRadius:'6px',
})

export const CoverText = styled(Typography)({
  fontFamily: fontovi.dancing,
  color:'white',
  fontSize:'5.1rem'
})

export const CoverSubText = styled(Typography)({
  fontFamily: fontovi.raleway,
  color:'#78c4f0'
})
export const CoverSubText2 = styled(Typography)({
  fontFamily: fontovi.edu,
  color:'white'
})

export const StyledButton = styled(Button)({
  marginTop:'6rem',
  width:'11rem',
  height:'3.4rem',
  backgroundColor:'#f5700a',
  color:'white',
  borderRadius:'3rem',
  '&:hover':{
    backgroundColor:'white',
    color:'black',
    border:'1px solid black'
  }
})

export const PriceTag = styled(Box)({
  width:'80px',
  height:'80px',
  backgroundColor:'#d9581c',
  borderRadius:'50%',
  color:'black',
  display:'flex',
  flexFlow:'column wrap',
  alignItems:'center',
  justifyContent:'center',
  transform:'rotate(-20deg)',
  position: 'relative',
  left:'30%',
  top:'30%',
  marginBottom: '2.3rem',
})

export const PlayButton = styled(Link)({
  width:'100px',
  height:'100px',
  backgroundColor:'#e8e6e6',
  borderRadius:'50%',
  color:'black',
  display:'flex',
  flexFlow:'column wrap',
  alignItems:'center',
  justifyContent:'center',
  position: 'relative',
  left:'-7%',
  top:'40%',
  marginBottom: '2.3rem',
})

export const SelectBox = styled(FormControl)({
  width:'70% ',
  height: '100%',
  display:'flex',
  flexFlow:'row wrap' ,
  alignItems:'center',
  justifyContent:'center',
})

export const MenuBox = styled(Box)({
  width:'100%',
  height:'100%',
  marginTop:'.6rem'
})

export const CoverLink = styled(Link)({
  display:'flex',
  flexFlow:'column wrap',
  alignItems:'flex-start',
  justifyContent:'flex-end',
  color:'white',
  padding:'1rem 1rem',
})

export const CenteredBox = styled(Box)({
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
  textAlign:'center',
  width:'100%',
  height:'3.7rem'
})

export const OfferBox = styled(Box)({
  height:'90vh',
  width:'33vw',
  display:'flex',
  flexFlow:'column wrap',
  alignItems:'stretch',
  justifyContent:'space-between',
  padding:'1.2rem',
  // border:'2px dashed green'
})


