import React from 'react';
import {Box} from 'native-base';
import {colors} from '../../themes';

const Card = props => {
  return (
    <Box width="100%" borderWidth={1} p={3} borderRadius={8}>
      {props.children}
    </Box>
  );
};

export {Card};
