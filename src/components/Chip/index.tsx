import { View, Text, DimensionValue } from 'react-native';
import { ReactNode } from 'react';
import { createStyles } from './styled';
import { COLORS } from '../../constants/theme';

interface Props {
  icon?: string | ReactNode;
  label: string;
  labelColor?: string;
  width?: DimensionValue;
}

export const Chip = ({ icon, label, labelColor = COLORS.TEXT, width }: Props) => {
  const styles = createStyles({ styles: { labelColor, width } });

  return (
    <View style={styles.container}>
      {icon && typeof icon === 'string' ? <Text>{icon}</Text> : icon}
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};