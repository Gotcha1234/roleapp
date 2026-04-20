import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { createStyles } from './styled';
import Ionicons from '@expo/vector-icons/Ionicons';
import { COLORS } from '../../constants/theme';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type NavigationProp = NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;

export const CharacterNameScreen = () => {
  const [characterName, setCharacterName] = React.useState('');
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();
  const styles = createStyles({ styles: { insets } });

  const handleGoBack = () => {
    navigation.navigate('HomeScreen');
  };

  const handleContinue = () => {
    console.log('Continuar');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleGoBack}
        style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={24} color={COLORS.GOLD} />
        <Text style={styles.backText}>Volver</Text>
      </TouchableOpacity>
      <Text style={styles.title}>Tu personaje</Text>
      <Text style={styles.subtitle}>¿Cómo quieres que te llamen en tu aventura?</Text>
      <View style={styles.separator} />
      <View style={styles.nameLabelContainer}>
        <Text style={styles.nameLabel}>NOMBRE DEL PERSONAJE</Text>
      </View>
      <View style={{ marginTop: 8 }}>
        <Input
          placeholder="Ej. Kael, Shadow, Lyra..."
          value={characterName}
          onChangeText={setCharacterName}
        />
      </View>
      {/* TODO: Add banner with message: "Este nombre aparecerá en tu perfil, logros y rankings. Puedes cambiarlo después." */}
      {/* TODO: Banner styles: { backgroundColor: COLORS.BG_CARD, paddingHorizontal: 16, paddingVertical: 14, borderRadius: 14, marginTop: 20 } */}
      <View style={styles.continueButtonContainer}>
        <Button label="Continuar" variant="primary" onPress={handleContinue} />
      </View>
    </View>
  );
};

