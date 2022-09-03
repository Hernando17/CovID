import React, {useEffect} from 'react';
import {
  Text,
  ScrollView,
  HStack,
  VStack,
  Spinner,
  Box,
  Divider,
  Spacer,
} from 'native-base';
import {colors, margins} from '../../themes';
import {Card, Loading} from '../../components';
import {useGetDataHarianQuery} from '../../redux/api/getDataHarian.api';
import {numberFormat} from '../../utils';

export default DashboardScreen = () => {
  const {data, error, isLoading} = useGetDataHarianQuery();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <ScrollView bg={colors.background} px={margins.pageX} py={margins.pageY}>
      <Text color={colors.white} fontSize={20} fontWeight="bold">
        Indonesia COVID-19 Cases Data
      </Text>
      <Text color={colors.white}>
        Last update on {data.update.penambahan.created}
      </Text>
      <VStack my={4}>
        <HStack justifyContent="space-between" mt={3}>
          <VStack width="48%">
            <Card>
              <Text fontSize={18} fontWeight="bold" color={colors.blue} mr={2}>
                Total Cases
              </Text>
              <Text fontSize={18}>
                {numberFormat(data.update.total.jumlah_positif)}
              </Text>
            </Card>
          </VStack>
          <VStack width="48%">
            <Card>
              <Text fontSize={18} fontWeight="bold" color={colors.red} mr={2}>
                Active Cases
              </Text>
              <Text fontSize={18}>
                {numberFormat(data.update.total.jumlah_dirawat)}
              </Text>
            </Card>
          </VStack>
        </HStack>
        <HStack justifyContent="space-between" mt={3}>
          <VStack width="48%">
            <Card>
              <Text fontSize={18} fontWeight="bold" color={colors.green} mr={2}>
                Recovered
              </Text>

              <Text fontSize={18}>
                {numberFormat(data.update.total.jumlah_sembuh)}
              </Text>
            </Card>
          </VStack>
          <VStack width="48%">
            <Card>
              <Text fontSize={18} fontWeight="bold" color={colors.gray}>
                Dead
              </Text>
              <Text fontSize={18}>
                {numberFormat(data.update.total.jumlah_meninggal)}
              </Text>
            </Card>
          </VStack>
        </HStack>
      </VStack>
      <Text color={colors.white} fontSize={20} fontWeight="bold">
        Update
      </Text>
      <VStack mt={2}>
        <Card>
          <VStack>
            <HStack justifyContent="space-between">
              <Text fontSize={18}>New Cases</Text>
              <Text fontSize={18} color={colors.red}>
                {numberFormat(data.update.penambahan.jumlah_positif)}
              </Text>
            </HStack>
            <Spacer size={2} />
            <Divider />
            <HStack justifyContent="space-between" mt={2}>
              <Text fontSize={18}>Recovered</Text>
              <Text fontSize={18} color={colors.green}>
                {numberFormat(data.update.penambahan.jumlah_sembuh)}
              </Text>
            </HStack>
            <Spacer size={2} />
            <Divider />
            <HStack justifyContent="space-between" mt={2}>
              <Text fontSize={18}>Dead</Text>
              <Text fontSize={18} color={colors.gray}>
                {numberFormat(data.update.penambahan.jumlah_meninggal)}
              </Text>
            </HStack>
          </VStack>
        </Card>
      </VStack>
    </ScrollView>
  );
};
