import { TouchableOpacity, Text, View } from 'react-native'
import { createStyles } from './styled'

const OPTIONS_LABELS = ['A', 'B', 'C', 'D']

interface Props {
  index: number;
  optionKey: string;
  label: string;
  isSelected: boolean;
  onPress: () => void;
}

export const QuizOption = ({ index, optionKey, label, isSelected, onPress }: Props) => {
  const styles = createStyles({ isSelected })

  return (
    <TouchableOpacity key={optionKey} style={styles.container} onPress={onPress}>
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>{OPTIONS_LABELS[index]}</Text>
      </View>
      <Text style={styles.optionLabel}>{label}</Text>
    </TouchableOpacity>
  )
}