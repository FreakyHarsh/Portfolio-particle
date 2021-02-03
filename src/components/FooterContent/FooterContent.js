import './FooterContent.css';
import React from 'react';
import { Box, Typography } from '@material-ui/core';

function FooterContent(props) {
  return (
    <Box className='footer' style={{ textAlign: 'center' }} p={2}>
      <Typography variant='overline'>Build with ReactJS and ❤️ by Harsh Boricha</Typography>
    </Box>
  );
}

export default FooterContent;
