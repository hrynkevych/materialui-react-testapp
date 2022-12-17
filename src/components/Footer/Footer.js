import React from "react";
import SimpleBottomNavigation from "../BottomNav/BottomNav.js";
import { Box, Grid, Typography } from "@mui/material";

const Footer = () => (
  <>
  <Box sx={{color: 'white.main', backgroundColor: 'dark_footer.main'}}>
    <Grid  container spacing={2}>
      <Grid item md={12} lg={6}>
        <Grid align={"left"} gutterBottom>
          <Typography variant='inherit' component="div" sx={{textTransform: 'uppercase'}}>
            About us
          </Typography>
        </Grid>
        <Grid>
        Ukraine is a country in Eastern Europe. It is the second-largest European country after Russia, which it borders to the east and northeast. Ukraine covers approximately 600,000 square kilometres.
        </Grid>
        <Grid>
        <SimpleBottomNavigation />
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid align={"left"} gutterBottom>
          <Typography variant='inherit' component="div" sx={{textTransform: 'uppercase'}}>
            Information
          </Typography>
        </Grid>
        <Grid>
          Following the collapse of the Soviet Union in 1991, Ukraine regained independence and declared itself neutral,[15] forming a limited military partnership with the post-Soviet Commonwealth of Independent States, while also joining the Partnership for Peace with NATO in 1994.
        </Grid>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Grid align={"left"} gutterBottom>
          <Typography variant='inherit' component="div" sx={{textTransform: 'uppercase'}}>
            My account
          </Typography>
        </Grid>
        <Grid>
          <Grid>Be Brave</Grid>
          <Grid>Like Ukraine!</Grid>
        </Grid>
      </Grid>
    </Grid>
    </Box>
  </>
);

export default Footer;
