import React, {FC, useMemo} from 'react';
import {Pressable, StyleProp, TextStyle, ViewStyle, Text} from 'react-native';
import ButtonStyles from './styles';
import {Colors} from '../../constants/colors';

interface IProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

const Button: FC<IProps> = ({
  title,
  onPress,
  disabled,
  buttonStyle,
  textStyle,
}) => {
  const styles = useMemo(() => ButtonStyles(), []);

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? Colors.SWIFT_DISABLED
            : Colors.SWIFT_BUTTON,
        },
        buttonStyle,
      ]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  );
};

export default Button;
