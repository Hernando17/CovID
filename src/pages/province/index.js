import React from 'react';
import {
  ScrollView,
  VStack,
  Text,
  Box,
  HStack,
  Avatar,
  Heading,
  FlatList,
  Spacer,
  View,
  Input,
} from 'native-base';
import {colors, margins} from '../../themes';
import {useGetDataProvinsiQuery} from '../../redux/api/getDataProvinsi.api';
import {Card, Loading} from '../../components';
import {search} from '../../utils';

export default ProvinceScreen = () => {
  const {data, error, isLoading} = useGetDataProvinsiQuery();
  const [inputSearch, setInputSearch] = React.useState('');

  if (isLoading) {
    return <Loading />;
  }

  return (
    <VStack flex={1} bg={colors.background}>
      <VStack px={margins.pageX} py={margins.pageY}>
        <Text color="white">Last Update : {data.last_date}</Text>
        <Text color="white">Available Province : {data.list_data.length}</Text>
        <Text color="white">Not Available : {data.tanpa_provinsi}</Text>
        <Input
          placeholder="Search Province"
          mt={3}
          value={inputSearch}
          onChangeText={setInputSearch}
        />
      </VStack>
      <FlatList
        data={
          inputSearch != ''
            ? search(data.list_data, inputSearch)
            : data.list_data
        }
        renderItem={({item}) => (
          <View px={margins.pageX} py={2}>
            <Card>
              <HStack justifyContent="space-between">
                <Text>{item.key}</Text>
                <Text>{item.jumlah_kasus}</Text>
              </HStack>
            </Card>
          </View>
        )}
      />
    </VStack>
  );
};
