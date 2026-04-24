import { View, Text } from 'react-native';
import { createStyles } from './styled';

interface StepperProps {
  currentStep: number;
  totalSteps: number;
  label: string;
}

export const Stepper = ({ currentStep, totalSteps, label }: StepperProps) => {
  const styles = createStyles({ currentStep, totalSteps });

  return (
    <View style={styles.container}>
      <View style={styles.stepContainer}>
        <Text style={styles.stepText}>{currentStep} / {totalSteps}</Text>
        <Text style={styles.label}>{label}</Text>
      </View>
      <View style={styles.progress}>
        <View style={styles.progressFill} />
      </View>
    </View>
  );
};