import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styled';

type Props = {
  label: string;
  onPress: () => void;
  variant: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
};

const Button = ({ label, onPress, variant, disabled = false }: Props) => {
  const buttonVariantStyle = styles[variant];
  const textVariantStyle = variant === 'primary' ? styles.primaryText : styles.secondaryText;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, buttonVariantStyle, disabled && styles.disabledButton]}
    >
      <Text style={[styles.text, textVariantStyle, disabled && styles.disabledText]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
