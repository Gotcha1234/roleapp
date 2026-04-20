import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import createStyles from './styled';
import { COLORS } from '../../constants/theme';

type GradientColors = readonly [string, string, ...string[]];
type BannerBackground = string | GradientColors;

type Props = {
  title?: string;
  textContent: string;
  backgroundColor: BannerBackground;
  borderColor?: string;
  textType?: 'normal' | 'italic';
  textAlignment?: 'left' | 'center' | 'right' | 'justify' | 'auto';
  textColor?: string;
};

const Banner = ({
  title,
  textContent,
  backgroundColor,
  borderColor,
  textColor = COLORS.TEXT,
  textType = 'normal',
  textAlignment = 'center',
}: Props) => {
  const styles = createStyles({
    styles: {
      textAlignment,
      textType,
      textColor,
    },
  });

  const containerBorderStyle = borderColor
    ? {
        borderWidth: 1,
        borderColor,
      }
    : {};

  const content = (
    <>
      {title && <Text style={[styles.title, styles.textType]}>{title}</Text>}
      <Text style={[styles.textType, styles.textAlignment, styles.textColor, styles.bodyText]}>{textContent}</Text>
    </>
  );

  if (typeof backgroundColor === 'string') {
    return (
      <View style={[styles.background1, containerBorderStyle, { backgroundColor }]}>
        {content}
      </View>
    );
  }

  return (
    <LinearGradient
      colors={backgroundColor}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.background1, containerBorderStyle]}
    >
      {content}
    </LinearGradient>
  );
};

export default Banner;
