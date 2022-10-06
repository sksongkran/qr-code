import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid } from "@mui/material";
import qrcode from "../img/image-qr-code.png";
export default function MediaCard() {
  return (
    <Grid container display="flex" justifyContent="center" alignItems="center" marginTop={15}>
      <Card sx={{ maxWidth: 345, borderRadius:3 , boxShadow:5}}>
        <Grid display="flex" sx={{height:300, m:3}}>
          <img src={qrcode} alt="qrcode" style={{borderRadius:10}}/>
        </Grid>
        <CardContent>
          <Typography gutterBottom variant="h6" component="div" sx={{alignContent:"center"}}>
          Improve your front-end skills by building projects
          </Typography>
          <Typography variant="body2" color="text.secondary">
          Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
