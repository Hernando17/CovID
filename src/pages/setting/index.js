import React, {useLayoutEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {ScrollView, HStack, VStack, Text, Select} from 'native-base';
import {colors, margins, languages} from '../../themes';
import {
  setLanguage,
  languageSelector,
} from '../../redux/feature/languageSlice.redux';

export default SettingScreen = () => {
  const savedLanguage = useSelector(languageSelector);
  const [selectedLanguage, setSelectedLanguage] = React.useState(
    savedLanguage.language == '' ? 'en' : savedLanguage.language,
  );

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(
      setLanguage({
        language: selectedLanguage,
      }),
    );

    return () => {};
  }, [selectedLanguage]);

  const languageList = [
    {
      label: 'English',
      value: 'en',
    },
    {
      label: 'Indonesia',
      value: 'id',
    },
  ];

  return (
    <ScrollView bg={colors.background} px={margins.pageX} py={margins.pageY}>
      <VStack>
        <Text color={colors.white} fontSize={18}>
          {languages[savedLanguage.language].settingPage.setting.language.label}
        </Text>
        <Select
          selectedValue={selectedLanguage}
          minWidth="200"
          color={colors.white}
          placeholder="Choose Language"
          _selectedItem={{
            bg: 'teal.600',
            color: colors.white,
            // endIcon: <CheckIcon size="5" />,
          }}
          mt={2}
          onValueChange={itemValue => setSelectedLanguage(itemValue)}>
          {languageList.map((item, index) => (
            <Select.Item label={item.label} value={item.value} key={index} />
          ))}
        </Select>
      </VStack>
    </ScrollView>
  );
};
