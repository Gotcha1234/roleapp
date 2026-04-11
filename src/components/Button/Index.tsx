import React from 'react';
import { Pressable, Text } from 'react-native';
import styles from './styled';

//Props for the Button component (label, onPress function, variant types, and optional disabled state)
type Props = {
  label: string;
  onPress: () => void;
  variant: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
};

//Button function plus constants to determine button style and text style
function Button({ label, onPress, variant, disabled = false }: Props) {
  const buttonVariantStyle = styles[variant];
  const textVasrianStyle = variant === 'primary' ? styles.primaryText : styles.secondaryText;

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, buttonVariantStyle, disabled && styles.disabledButton]}
    >
      <Text style={[styles.text, textVasrianStyle, disabled && styles.disabledText]}>
        {label}
      </Text>
    </Pressable>
  );
}

export default Button;
