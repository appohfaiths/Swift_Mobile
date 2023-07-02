import React, {FC, useMemo} from 'react';
import {View, Text} from 'react-native';
import ScreenStyles from './styles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const AccountVerifiedScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => ScreenStyles(), []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Verified Screen</Text>
    </View>
  );
};

export default AccountVerifiedScreen;
