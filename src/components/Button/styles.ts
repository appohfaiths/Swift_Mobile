import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const ButtonStyles = () =>
  StyleSheet.create({
    button: {
      width: '95%',
      alignSelf: 'center',
      padding: 10,
      alignItems: 'center',
      borderRadius: 12,
    },
    text: {
      color: Colors.WHITE,
      fontSize: 18,
      fontWeight: '200',
    },
  });

export default ButtonStyles;
