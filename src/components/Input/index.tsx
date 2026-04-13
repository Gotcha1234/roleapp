import React from 'react';
import { Text, TextInput } from 'react-native';
import styles from './styled';
import { COLORS } from '../../constants/theme';

type Props = {
  textlabel?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
};

const Input = ({ textlabel, value, onChangeText, placeholder }: Props) => {
  return (
    <>
      {textlabel && <Text style={styles.aboveText}>{textlabel}</Text>}
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