import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { createStyles } from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../constants/theme';

type Props = {
  label: string;
  onPress: () => void;
  variant: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  fullWidth?: boolean;
};

const Button = ({ label, onPress, variant, disabled = false, fullWidth = false }: Props) => {
  const styles = createStyles();
  const textVariantStyle = variant === 'primary' ? styles.primaryText : styles.secondaryText;

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[styles.button, disabled && styles.disabledButton, fullWidth && styles.fullWidth]}
    >
      {variant === 'primary' ? (
        <LinearGradient
          colors={[COLORS.GOLD, COLORS.GOLD_MID]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.gradient}
        >
          <Text style={[styles.text, textVariantStyle, disabled && styles.disabledText]}>
            {label}
          </Text>
        </LinearGradient>
      ) : (
        <Text style={[styles.text, textVariantStyle, disabled && styles.disabledText]}>
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
