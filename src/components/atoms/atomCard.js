import React from 'react';
import {Box} from 'native-base';
import {colors} from '../../themes';

const Card = props => {
  return (
    <Box width="100%" p={5} borderRadius={8} bg={colors.white}>
      {props.children}
    </Box>
  );
};

export {Card};
