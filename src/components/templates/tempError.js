import React from 'react';
import {VStack, HStack, Text} from 'native-base';
import {colors} from '../../themes';
import {Image} from 'react-native';

const Error502 = () => {
  return (
    <VStack
      height="100%"
      alignItems="center"
      justifyContent="center"
      bg={colors.background}>
      <Image
        style={{width: '40%', height: '40%'}}
        source={require('../../assets/img/error/error500.png')}
      />
      <Text color="white" fontWeight="bold" fontSize={24}>
        502 Bad Gateway
      </Text>
      <Text color="white" fontSize={16}>
        Please try again later
      </Text>
    </VStack>
  );
};

export {Error502};
