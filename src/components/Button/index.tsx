import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { createStyles } from './styled';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS } from '../../constants/theme';

type Props = {
  label: string;
  onPress: () => void;
  variant: 'primary' | 'secondary' | 'ghost';
  disabled?: boolean;
  fullWidth?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  maxWidth?: number;
  minWidth?: number;
};

const Button = ({ label, onPress, variant, disabled = false, fullWidth = false, iconLeft, iconRight, maxWidth, minWidth }: Props) => {
  const styles = createStyles({ maxWidth, minWidth });
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
          {iconLeft && <View>{iconLeft}</View>}
          <Text style={[styles.text, textVariantStyle, disabled && styles.disabledText]}>
            {label}
          </Text>
          {iconRight && <View>{iconRight}</View>}
        </LinearGradient>
      ) : (
        <View style={styles.textContainer}>
          {iconLeft && <View>{iconLeft}</View>}
          <Text style={[styles.text, textVariantStyle, disabled && styles.disabledText]}>
            {label}
          </Text>
          {iconRight && <View>{iconRight}</View>}
        </View>
      )}
    </TouchableOpacity>
  );
};

export default Button;
