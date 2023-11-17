import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Container } from '@mui/material';
import Footer from '../Footer';

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <Container className='my-3'>
    <ImageList
      sx={{ maxWidth: 1100, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Container>
    
  );
}

const itemData = [
  {
    img: 'https://content.jdmagicbox.com/comp/lucknow/i5/0522px522.x522.210915215202.c4i5/catalogue/indian-cricket-club-transport-nagar-lucknow-cricket-clubs-g3xu4ianq8.jpg',
    title: 'Breakfast',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.shutterstock.com/image-vector/sticker-cricket-stickers-paper-price-260nw-2194286725.jpg',
    title: 'Burger',
  },
  {
    img: 'https://static.vecteezy.com/system/resources/thumbnails/005/564/867/small/a-cricketer-playing-cricket-on-the-pitch-in-white-dress-for-test-matches-sportsperson-hitting-a-shot-on-the-cricket-ball-photo.jpg',
    title: 'Camera',
  },
  {
    img: 'https://www.sportsuncle.com/image/catalog/images/blog/balls.jpg',
    title: 'Coffee',
    cols: 2,
  },
  {
    img: 'https://5.imimg.com/data5/SELLER/Default/2021/10/CW/HW/LM/34202267/cricket-ground-construction.png',
    title: 'Hats',
    cols: 2,
  },
  {
    img: 'https://images.hindustantimes.com/rf/image_size_630x354/HT/p2/2019/01/30/Pictures/ranji-trophy-semifinal-match-in-bengaluru_bc87188c-243a-11e9-a405-f80f48f5557a.jpg',
    title: 'Honey',
    author: '@arwinneil',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://thumbs.dreamstime.com/b/placement-ranji-trophy-cricket-match-37556968.jpg',
    title: 'Basketball',
  },
  {
    img: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_640,q_50/lsci/db/PICTURES/CMS/280500/280536.6.jpg',
    title: 'Fern',
  },
  {
    img: 'https://cricketgraph.com/wp-content/gallery/strikers-cricket-club-goregaon/Strikers-Cricket-Club-Goregaon-2.jpg',
    title: 'Mushrooms',
    rows: 2,
    cols: 2,
  },
  {
    img: 'https://www.thecricketclubofindia.com/uploads/home/image_75_1_2021-03-22-12-57_thumb.jpg',
    title: 'Tomato basil',
  },
  {
    img: 'https://www.ucd.ie/sport/t4media/Untitled%20design%20(10)-3.png',
    title: 'Sea star',
  },
  {
    img: 'https://thumbs.dreamstime.com/b/cricket-bat-ball-26560801.jpg',
    title: 'Bike',
    cols: 2,
  },
];