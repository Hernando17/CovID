import React, {useEffect} from 'react';
import {Text, ScrollView, HStack, VStack, Spinner, Box} from 'native-base';
import {colors, margins} from '../../themes';
import {
  Card,
  Loading,
  BubbleRed,
  BubbleGreen,
  BubbleGray,
} from '../../components';
import {useGetDataHarianQuery} from '../../redux/api/getDataHarian.api';

export default DashboardScreen = () => {
  const {data, error, isLoading} = useGetDataHarianQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView bg={colors.background} px={margins.pageX} py={margins.pageY}>
      <Text color={colors.white} fontSize={20} fontWeight="bold">
        Data kasus COVID-19 di Indonesia
      </Text>
      <VStack mt={3}>
        <Card>
          <HStack>
            <Text fontSize={18} fontWeight="bold" color={colors.red} mr={2}>
              Total Kasus
            </Text>
            <BubbleRed>
              <Text>+ {data.update.penambahan.jumlah_positif}</Text>
            </BubbleRed>
          </HStack>
          <Text fontSize={18}>{data.update.total.jumlah_positif}</Text>
        </Card>
        <HStack justifyContent="space-between" mt={3}>
          <VStack width="48%">
            <Card>
              <HStack>
                <Text
                  fontSize={18}
                  fontWeight="bold"
                  color={colors.green}
                  mr={2}>
                  Sembuh
                </Text>
                <BubbleGreen>
                  <Text>+ {data.update.penambahan.jumlah_sembuh}</Text>
                </BubbleGreen>
              </HStack>
              <Text fontSize={18}>{data.update.total.jumlah_sembuh}</Text>
            </Card>
          </VStack>
          <VStack width="48%">
            <Card>
              <HStack>
                <Text
                  fontSize={18}
                  fontWeight="bold"
                  color={colors.gray}
                  mr={2}>
                  Meninggal
                </Text>
                <BubbleGray>
                  <Text>+ {data.update.penambahan.jumlah_meninggal}</Text>
                </BubbleGray>
              </HStack>
              <Text fontSize={18}>{data.update.total.jumlah_meninggal}</Text>
            </Card>
          </VStack>
        </HStack>
      </VStack>
    </ScrollView>
  );
};
