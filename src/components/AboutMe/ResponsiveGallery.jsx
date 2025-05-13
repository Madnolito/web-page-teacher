import React from 'react';
import {
  ImageList,
  ImageListItem,
  useMediaQuery,
  useTheme,
  Box,
} from '@mui/material';
import { motion } from 'framer-motion';

import image1 from '../../assets/futbol_niños/futbol_1.jpeg';
import image2 from '../../assets/futbol_niños/futbol_2.jpeg';
import image3 from '../../assets/futbol_niños/futbol_3.jpeg';
import image4 from '../../assets/futbol_niños/futbol_4.jpeg';

const itemData = [
  { img: image1, title: '1', ratio: '5/5' },
  { img: image2, title: '2', ratio: '2/3' },
  { img: image3, title: '3', ratio: '2/3' },
  { img: image4, title: '4', ratio: '3/4' },
  { img: image2, title: '5', ratio: '3/3' },
  { img: image1, title: '6', ratio: '3/4' },
];

export default function ResponsiveGallery() {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));
  const isSm = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  let cols = 3;
  if (isXs) cols = 1;
  else if (isSm) cols = 2;

  return (

        <ImageList variant="masonry" cols={cols} gap={10}
        sx={{
            padding: {
            xs: 0,      
            sm: '0.5rem', 
            }}
            }
        >
        {itemData.map((item, index) => (
          <ImageListItem key={index}>
            <Box
            sx={{
                width: '100%',
                aspectRatio: item.ratio,
                overflow: 'hidden',
                boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.1)',
                borderRadius: '5px'
            }}
            >
            <motion.img
                src={item.img}
                alt={item.title}
                loading="lazy"
                whileHover={{
                scale: 1.2,
                }}
                transition={{ duration: 0.3 }}
                style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                display: 'block',
                }}
            />
            </Box>
          </ImageListItem>
        ))}
      </ImageList>
  );
}
