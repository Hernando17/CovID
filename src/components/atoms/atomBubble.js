import React from 'react';
import {Box} from 'native-base';

const px = 2;

const BubbleRed = props => {
  return (
    <Box bg="red.100" px={px} justifyContent="center" borderRadius={100}>
      {props.children}
    </Box>
  );
};

const BubbleGreen = props => {
  return (
    <Box bg="green.100" px={px} justifyContent="center" borderRadius={100}>
      {props.children}
    </Box>
  );
};

const BubbleGray = props => {
  return (
    <Box bg="gray.100" px={px} justifyContent="center" borderRadius={100}>
      {props.children}
    </Box>
  );
};

export {BubbleRed, BubbleGreen, BubbleGray};
