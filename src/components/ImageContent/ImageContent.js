import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Typography } from '@mui/material';

export default function ImageContent() {
  const itemData = [
    {
      img: "../images/cat1.jfif",
      title: "Shyster",
      id: 1
    },
    {
      img: "../images/cat2.jpg",
      title: "Lazy",
      id: 2
    },
    {
      img: "../images/cat3.jfif",
      title: "Brandy",
      id: 3
    },
    {
      img: "../images/cat4.jpg",
      title: "Milk",
      id: 4
    },
    {
      img: "../images/cat5.jpg",
      title: "Blinds",
      id: 5
    },
    {
      img: "../images/cat6.jpg",
      title: "Charles",
      id: 6
    },
    {
      img: "../images/cat7.jpg",
      title: "Laptop",
      id: 7
    },
    {
      img: "../images/cat8.jpg",
      title: "Dorothy",
      id: 8
    },
    {
      img: "../images/cat9.jpg",
      title: "Feather",
      id: 9
    },
    {
      img: "../images/cat10.jpg",
      title: "Storm",
      id: 10
    },
    {
      img: "../images/cat11.jpg",
      title: "Candy",
      id: 11
    },
    {
      img: "../images/cat12.jpg",
      title: "Sporty",
      id: 12
    },
    {
      img: "../images/cat13.jpg",
      title: "Fluffy",
      id: 13
    },
  ];

  return (
    <>
    <Typography variant='h5' textAlign={'center'}>Waiting for their owners</Typography>
      <ImageList sx={{
            columnCount: {
                xs: '1 !important',
                sm: '2 !important',
                md: '3 !important',
                lg: '3 !important',
                xl: '3 !important',
        },
        }}
        variant="masonry" cols={3} gap={8}>
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
      </>
  );
}