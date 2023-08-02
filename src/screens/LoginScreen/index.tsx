import React, {FC, useMemo, useState} from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import ScreenStyles from './styles';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface IProps {
  navigation: NavigationProp<ParamListBase>;
}

const LoginScreen: FC<IProps> = ({navigation}) => {
  const styles = useMemo(() => ScreenStyles(), []);

  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const onLoginPress = () => {
    navigation.navigate('HomeScreen');
  };

  const handleEmailChange = e => {
    setUserData({...userData, email: e.target.value});
    console.log(userData);
  };
  const handlePasswordChange = e => {
    setUserData({...userData, password: e.target.value});
    console.log(userData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={handleEmailChange}
          value={userData.email}
          placeholder="Email"
        />
        <TextInput
          style={styles.textInput}
          onChangeText={handlePasswordChange}
          value={userData.password}
          placeholder="Password"
        />

        <Button title="Login" onPress={onLoginPress} disabled={false} />
        {showErrorAlert && <Text>Please create an account to proceed</Text>}
      </View>
    </View>
  );
};

export default LoginScreen;
