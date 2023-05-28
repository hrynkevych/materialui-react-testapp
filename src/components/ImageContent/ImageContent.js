import * as React from 'react';
import { useState, useEffect } from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Box, Typography, useMediaQuery } from '@mui/material';
import theme from '../../styles/index.js' 

export default function ImageContent() {
  const itemData = [
    {
      img: "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg",
      title: "Shyster",
      id: 1
    },
    {
      img: "https://upload.wikimedia.org/wikipedia/commons/1/15/Cat_August_2010-4.jpg",
      title: "Lazy",
      id: 2
    },
    {
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2022%2F09%2F22%2Ffacts-about-cats-1292117990-2000.jpg&q=60",
      title: "Brandy",
      id: 3
    },
    {
      img: "https://cdn.theatlantic.com/thumbor/d8lh_KAZuOgBYslMOP4T0iu9Fks=/0x62:2000x1187/1600x900/media/img/mt/2018/03/AP_325360162607/original.jpg",
      title: "Milk",
      id: 4
    },
    {
      img: "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg",
      title: "Blinds",
      id: 5
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4dByqg_LrjKE6Z9_Yll7oRKM6u2Zb-TLig&usqp=CAU",
      title: "Charles",
      id: 6
    },
    {
      img: "https://www.petfinder.com/static/75ef39a9e08db93c24b69aa7900c4592/4319a/Dangerous%20cats.jpg",
      title: "Laptop",
      id: 7
    },
    {
      img: "https://www.understandinganimalresearch.org.uk/application/files/thumbnails/page_2x/4915/5800/5951/cat-looking-up-at-animal-technician_cropped.jpg",
      title: "Dorothy",
      id: 8
    },
    {
      img: "https://www.petfinder.com/static/75ef39a9e08db93c24b69aa7900c4592/4319a/Dangerous%20cats.jpg",
      title: "Feather",
      id: 9
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4dByqg_LrjKE6Z9_Yll7oRKM6u2Zb-TLig&usqp=CAU",
      title: "Storm",
      id: 10
    },
    {
      img: "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761-s1100-c50.jpg",
      title: "Candy",
      id: 11
    },
    {
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2022%2F09%2F22%2Ffacts-about-cats-1292117990-2000.jpg&q=60",
      title: "Sporty",
      id: 12
    },
    {
      img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F47%2F2022%2F09%2F22%2Ffacts-about-cats-1292117990-2000.jpg&q=60",
      title: "Fluffy",
      id: 13
    },
  ];
const [column, setColumn] = useState(0);

const xs = useMediaQuery(theme.breakpoints.up('xs'));
const md = useMediaQuery(theme.breakpoints.up('sm'));
const lg = useMediaQuery(theme.breakpoints.up('md'));

useEffect(() => {
  if(xs) {
    setColumn(1)
  }
  if(md) {
    setColumn(2)
  }
  if(lg) {
    setColumn(3)
  }
}, [xs, md, lg])

  return (
    <Box component='div' sx={{margin: '0 5vw 5vw'}}>
    <Typography variant='h5' textAlign={'center'} sx={{marginTop: '15px'}}>
      Waiting for their owners
    </Typography>
    
      <ImageList cols={column}
        variant="masonry" gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.title}
              subtitle={item.author}
              actionIcon={
                <IconButton>
                  <FavoriteIcon
                    sx={{
                      color: 'light.main',
                      '&:hover': {
                        color: 'primary.main'}
                    }}
                  />
                </IconButton>
              }
              
            />
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
  );
}