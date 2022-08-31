import React from 'react';
import {Text, View, ScrollView} from 'native-base';
import {colors} from '../../themes';
import {Card} from '../../components';

export default DashboardScreen = () => {
  return (
    <ScrollView bg={colors.white}>
      <Card>
        <Text>Dashboard</Text>
      </Card>
    </ScrollView>
  );
};
