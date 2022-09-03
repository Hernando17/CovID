import React from 'react';
import {VStack, HStack, Spinner} from 'native-base';
import {colors} from '../../themes';

const Loading = () => {
  return (
    <VStack
      height="100%"
      alignItems="center"
      justifyContent="center"
      bg={colors.background}>
      <HStack space={2} justifyContent="center">
        <Spinner size={100} />
      </HStack>
    </VStack>
  );
};

export {Loading};
