import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const ScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.SWIFT_BUBBLE,
    },
    text: {
      fontSize: 30,
      fontWeight: '400',
      color: Colors.SWIFT_PINK,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: 'row',
      gap: 3,
      width: '100%',
      padding: 20,
      alignContent: 'center',
      justifyContent: 'center',
    },
    loginText: {
      textAlign: 'center',
      textDecorationLine: 'underline',
      fontSize: 14,
      color: Colors.SWIFT_BUTTON,
    },
    inputContainer: {
      flex: 3,
      gap: 15,
      width: '80%',
      height: 50,
      borderRadius: 10,
      marginBottom: 20,
      alignContent: 'center',
      justifyContent: 'center',
    },
    textInput: {
      height: 50,
      margin: 12,
      padding: 15,
      backgroundColor: Colors.SWIFT_INPUT,
      borderRadius: 15,
    },
  });

export default ScreenStyles;
