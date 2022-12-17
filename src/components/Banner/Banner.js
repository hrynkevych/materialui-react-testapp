import { Box, Button, Card, CardActions, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from '@mui/material';
import catPic from '../../images/banner/cat.png';

function Banner() {
    const theme = useTheme();
    const breakpointsDownSm = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <>
            <Card sx={{ marginTop: '7rem', display: 'flex', justifyContent: 'space-around', flexWrap: breakpointsDownSm ? 'wrap' : 'nowrap'}}>
                <CardMedia
                    component='img'
                    image={catPic}
                    alt='cat banner'
                    sx={{width: '38vw'}}
                />
                <Box sx={{display: 'flex', flexDirection: 'column', margin: '0 8vw'}}>
                    <CardContent>
                        <Typography variant="h5" component="div">Our motto</Typography>
                        <Typography variant="h3" component="div">Help animals</Typography>
                        <Typography variant="h7" component="div">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ex nisl, molestie
                            vitae quam quis, rutrum pellentesque odio. Proin at dapibus lorem. Sed laoreet turpis enim,
                            scelerisque viverra quam eleifend vitae. Vivamus a pharetra erat.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant='contained' sx={{width: '100%', height: '60px'}}>Donate</Button>
                    </CardActions>
                </Box>
            </Card>
        </>
    )
}

export default Banner;