import React from 'react';
import { Text, TextInput } from 'react-native';
import styles from './styled';
import { COLORS } from '../../constants/theme';

type Props = {
  textLabel?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const Input = ({ textLabel, value, onChangeText, placeholder }: Props) => {
  return (
    <>
      {textLabel && <Text style={styles.aboveText}>{textLabel}</Text>}
      <TextInput
        placeholderTextColor={COLORS.TEXT_DIM}
        style={styles.inputBox}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

export default Input;