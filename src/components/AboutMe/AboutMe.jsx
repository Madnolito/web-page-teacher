import React from 'react';
import { Box } from '@mui/material';
import ResponsiveGallery from './ResponsiveGallery';
import { mobileOnlyPadding } from '../theme/utils';

const AboutMe = () => {
  return (
    <Box sx={{...mobileOnlyPadding("1rem")}}>
    <ResponsiveGallery />

</Box>
  );
}

export default AboutMe;