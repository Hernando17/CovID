import React from 'react';
import {Text, ScrollView, HStack, VStack, Divider, Spacer} from 'native-base';
import {colors, margins, languages} from '../../themes';
import {Card, Loading, Error502} from '../../components';
import {useGetDataHarianQuery} from '../../redux/api/getDataHarian.api';
import {numberFormat} from '../../utils';
import {useSelector} from 'react-redux';
import {languageSelector} from '../../redux/feature/languageSlice.redux';

export default DashboardScreen = () => {
  const {data, error, isLoading, isError} = useGetDataHarianQuery();
  const savedLanguage = useSelector(languageSelector);

  if (isLoading) {
    return <Loading />;
  } else if (isError && error.originalStatus == '502') {
    return <Error502 />;
  }

  return (
    <ScrollView bg={colors.background} px={margins.pageX} py={margins.pageY}>
      <Text color={colors.white} fontSize={20} fontWeight="bold">
        {languages[savedLanguage.language].dashboardPage.head.title}
      </Text>
      <Text color={colors.white}>
        {languages[savedLanguage.language].dashboardPage.head.lastUpdate +
          ' ' +
          data.update.penambahan.created}
      </Text>
      <VStack mb={4}>
        <HStack justifyContent="space-between" mt={3}>
          <VStack width="48%">
            <Card>
              <Text
                fontSize={18}
                fontWeight="bold"
                color={colors.blue[0]}
                mr={2}>
                {
                  languages[savedLanguage.language].dashboardPage.body
                    .totalCases
                }
              </Text>
              <Text fontSize={18}>
                {numberFormat(data.update.total.jumlah_positif)}
              </Text>
            </Card>
          </VStack>
          <VStack width="48%">
            <Card>
              <Text fontSize={18} fontWeight="bold" color={colors.red} mr={2}>
                {
                  languages[savedLanguage.language].dashboardPage.body
                    .activeCases
                }
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
                {languages[savedLanguage.language].dashboardPage.body.recovered}
              </Text>
              <Text fontSize={18}>
                {numberFormat(data.update.total.jumlah_sembuh)}
              </Text>
            </Card>
          </VStack>
          <VStack width="48%">
            <Card>
              <Text fontSize={18} fontWeight="bold" color={colors.gray}>
                {languages[savedLanguage.language].dashboardPage.body.dead}
              </Text>
              <Text fontSize={18}>
                {numberFormat(data.update.total.jumlah_meninggal)}
              </Text>
            </Card>
          </VStack>
        </HStack>
      </VStack>
      <Text color={colors.white} fontSize={20} fontWeight="bold">
        {languages[savedLanguage.language].dashboardPage.body.update.title}
      </Text>
      <VStack mt={2}>
        <Card>
          <VStack>
            <HStack justifyContent="space-between">
              <Text fontSize={18}>
                {
                  languages[savedLanguage.language].dashboardPage.body.update
                    .newCases
                }
              </Text>
              <Text fontSize={18} color={colors.red}>
                {numberFormat(data.update.penambahan.jumlah_positif)}
              </Text>
            </HStack>
            <Spacer size={2} />
            <Divider />
            <HStack justifyContent="space-between" mt={2}>
              <Text fontSize={18}>
                {
                  languages[savedLanguage.language].dashboardPage.body.update
                    .recovered
                }
              </Text>
              <Text fontSize={18} color={colors.green}>
                {numberFormat(data.update.penambahan.jumlah_sembuh)}
              </Text>
            </HStack>
            <Spacer size={2} />
            <Divider />
            <HStack justifyContent="space-between" mt={2}>
              <Text fontSize={18}>
                {
                  languages[savedLanguage.language].dashboardPage.body.update
                    .dead
                }
              </Text>
              <Text fontSize={18} color={colors.gray}>
                {numberFormat(data.update.penambahan.jumlah_meninggal)}
              </Text>
            </HStack>
          </VStack>
        </Card>
      </VStack>
    </ScrollView>
  );
  return (
    <ScrollView bg={colors.background} px={margins.pageX} py={margins.pageY}>
      <Text color={colors.white} fontSize={20} fontWeight="bold">
        {languages[savedLanguage.language].dashboardPage.head.title}
      </Text>
      <Text color={colors.white}>
        {languages[savedLanguage.language].dashboardPage.head.lastUpdate +
          ' ' +
          data.update.penambahan.created}
      </Text>
      <VStack mb={4}>
        <HStack justifyContent="space-between" mt={3}>
          <VStack width="48%">
            <Card>
              <Text
                fontSize={18}
                fontWeight="bold"
                color={colors.blue[0]}
                mr={2}>
                {
                  languages[savedLanguage.language].dashboardPage.body
                    .totalCases
                }
              </Text>
              <Text fontSize={18}>
                {numberFormat(data.update.total.jumlah_positif)}
              </Text>
            </Card>
          </VStack>
          <VStack width="48%">
            <Card>
              <Text fontSize={18} fontWeight="bold" color={colors.red} mr={2}>
                {
                  languages[savedLanguage.language].dashboardPage.body
                    .activeCases
                }
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
                {languages[savedLanguage.language].dashboardPage.body.recovered}
              </Text>
              <Text fontSize={18}>
                {numberFormat(data.update.total.jumlah_sembuh)}
              </Text>
            </Card>
          </VStack>
          <VStack width="48%">
            <Card>
              <Text fontSize={18} fontWeight="bold" color={colors.gray}>
                {languages[savedLanguage.language].dashboardPage.body.dead}
              </Text>
              <Text fontSize={18}>
                {numberFormat(data.update.total.jumlah_meninggal)}
              </Text>
            </Card>
          </VStack>
        </HStack>
      </VStack>
      <Text color={colors.white} fontSize={20} fontWeight="bold">
        {languages[savedLanguage.language].dashboardPage.body.update.title}
      </Text>
      <VStack mt={2}>
        <Card>
          <VStack>
            <HStack justifyContent="space-between">
              <Text fontSize={18}>
                {
                  languages[savedLanguage.language].dashboardPage.body.update
                    .newCases
                }
              </Text>
              <Text fontSize={18} color={colors.red}>
                {numberFormat(data.update.penambahan.jumlah_positif)}
              </Text>
            </HStack>
            <Spacer size={2} />
            <Divider />
            <HStack justifyContent="space-between" mt={2}>
              <Text fontSize={18}>
                {
                  languages[savedLanguage.language].dashboardPage.body.update
                    .recovered
                }
              </Text>
              <Text fontSize={18} color={colors.green}>
                {numberFormat(data.update.penambahan.jumlah_sembuh)}
              </Text>
            </HStack>
            <Spacer size={2} />
            <Divider />
            <HStack justifyContent="space-between" mt={2}>
              <Text fontSize={18}>
                {
                  languages[savedLanguage.language].dashboardPage.body.update
                    .dead
                }
              </Text>
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
