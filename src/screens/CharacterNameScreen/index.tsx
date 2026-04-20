import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';
import { createStyles } from './styled';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Banner from '../../components/Banner';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SCREENS } from '../../constants/constants';
import { getCharacter, setCharacter } from '../../store/characterStore';
import { GoBack } from '../../components/GoBack';
import { COLORS } from '../../constants/theme';

const { home, onboardingIntro } = SCREENS;

type NavigationProp = NativeStackNavigationProp<RootStackParamList, typeof SCREENS.home, typeof SCREENS.onboardingIntro>;

export const CharacterNameScreen = () => {
  const [characterName, setCharacterName] = useState('');
  const navigation = useNavigation<NavigationProp>();
  const insets = useSafeAreaInsets();
  const styles = createStyles({ styles: { insets } });

  useEffect(() => {
    let cancelled = false;

    const retrieveCharacter = async () => {
      const character = await getCharacter();
      if (!character || cancelled) return;
      const characterData = JSON.parse(character);
      if (characterData?.name) {
        setCharacterName(characterData.name);
      }
    };

    retrieveCharacter();

    return () => { cancelled = true; };
  }, []);

  const handleGoBack = () => {
    navigation.navigate(home);
  };

  const handleContinue = () => {
    if (!characterName.trim()) return;
    setCharacter(JSON.stringify({ name: characterName }));
    navigation.navigate(onboardingIntro);
  };

  return (
    <View style={styles.container}>
      <GoBack onPress={handleGoBack} />
      <Text style={styles.title}>Tu personaje</Text>
      <Text style={styles.subtitle}>¿Cómo quieres que te llamen en tu aventura?</Text>
      <View style={styles.separator} />
      <View style={styles.nameLabelContainer}>
        <Text style={styles.nameLabel}>NOMBRE DEL PERSONAJE</Text>
      </View>
      <View style={styles.inputContainer}>
        <Input
          placeholder="Ej. Kael, Shadow, Lyra..."
          value={characterName}
          onChangeText={setCharacterName}
        />
      </View>
      <Banner
        textContent="Este nombre aparecerá en tu perfil, logros y rankings. Puedes cambiarlo después."
        backgroundColor={COLORS.BG_CARD}
        textColor={COLORS.TEXT_DIM}
        textType="normal"
        textAlignment="left"
      />
      {/* TODO: Add banner with message: "Este nombre aparecerá en tu perfil, logros y rankings. Puedes cambiarlo después." */}
      {/* TODO: Banner styles: { backgroundColor: COLORS.BG_CARD, paddingHorizontal: 16, paddingVertical: 14, borderRadius: 14, marginTop: 20 } */}
      <View style={styles.continueButtonContainer}>
        <Button label="Continuar" variant="primary" onPress={handleContinue} />
      </View>
    </View>
  );
};

