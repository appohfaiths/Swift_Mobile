import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/colors';

const ScreenStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 30,
      fontWeight: '400',
      color: Colors.SWIFT_PINK,
    },
  });

export default ScreenStyles;
