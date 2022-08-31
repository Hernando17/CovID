import React, {useEffect} from 'react';
import {Text, View, ScrollView, HStack, VStack} from 'native-base';
import {colors, margins} from '../../themes';
import {Card} from '../../components';
import {useGetDataHarianQuery} from '../../redux/api/getDataHarian.api';

export default DashboardScreen = () => {
  const {data, error, isLoading} = useGetDataHarianQuery();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     console.log(data.update.total.jumlah_positif);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // });

  return (
    <ScrollView bg={colors.background} px={margins.pageX} py={margins.pageY}>
      <Text color={colors.white} fontSize={20} fontWeight="bold">
        Data kasus COVID-19 di Indonesia
      </Text>
      <VStack mt={3}>
        <Card>
          <Text fontSize={20} fontWeight="bold" color={colors.red}>
            Total Kasus
          </Text>
          <Text fontSize={20}>{data.update.total.jumlah_positif}</Text>
        </Card>
        <HStack justifyContent="space-between" mt={3}>
          <VStack width="48%">
            <Card>
              <Text fontSize={20} fontWeight="bold" color={colors.green}>
                Sembuh
              </Text>
              <Text fontSize={20}>{data.update.total.jumlah_sembuh}</Text>
            </Card>
          </VStack>
          <VStack width="48%">
            <Card>
              <Text fontSize={20} fontWeight="bold" color={colors.gray}>
                Meninggal
              </Text>
              <Text fontSize={20}>{data.update.total.jumlah_meninggal}</Text>
            </Card>
          </VStack>
        </HStack>
      </VStack>
    </ScrollView>
  );
};
