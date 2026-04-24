import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Stepper } from '../../components/Stepper';
import { createStyles } from './styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Chip } from '../../components/Chip';
import { COLORS } from '../../constants/theme';
import { loadQuizAnswers, loadQuizProgress } from '../../store/quizStore';
import { allQuizQuestions } from '../../constants/quizQuestions';
import { QuizOption } from '../../components/QuizOption';
import { statNames, STATS } from '../../constants/stats';
import Button from '../../components/Button';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { SCREENS } from '../../constants/constants';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/AppNavigator';

const CHIP_LABEL = {
  [STATS.STRENGTH]: 'Fuerza — Ejercicio de fuerza',
  [STATS.INTELLIGENCE]: 'Inteligencia — Ejercicio de inteligencia',
  [STATS.ENDURANCE]: 'Resistencia — Ejercicio de resistencia',
  [STATS.WISDOM]: 'Sabiduría — Ejercicio de sabiduría',
  [STATS.FAITH]: 'Fe — Ejercicio de fe',
  [STATS.MAGIC]: 'Magia — Ejercicio de magia',
};

const COLORS_QUIZ = {
  [STATS.STRENGTH]: COLORS.QUIZ_STRENGTH,
  [STATS.INTELLIGENCE]: COLORS.QUIZ_INTELLIGENCE,
  [STATS.ENDURANCE]: COLORS.QUIZ_ENDURANCE,
  [STATS.WISDOM]: COLORS.QUIZ_WISDOM,
  [STATS.FAITH]: COLORS.QUIZ_FAITH,
  [STATS.MAGIC]: COLORS.QUIZ_MAGIC,
};

type Nav = NativeStackNavigationProp<RootStackParamList, typeof SCREENS.onboardingIntro>;

export const QuizScreen = () => {
  const insets = useSafeAreaInsets();
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const navigation = useNavigation<Nav>();
  const currentQuestion = allQuizQuestions[step - 1]
  const statName = statNames[currentQuestion.stat];
  const totalAnsweredQuestions = Object.keys(answers).length;
  const styles = createStyles({ top: insets.top, bottom: insets.bottom, chipBgColor: COLORS_QUIZ[currentQuestion.stat] });

  const handlePreviousStep = () => {
    if (step === 1) {
      navigation.navigate(SCREENS.onboardingIntro);
    } else {
      setStep(step - 1);
    }
  };

  const handleNextStep = () => {
    if (step < allQuizQuestions.length) {
      setStep(step + 1);
    }
  };

  const handleAnswer = (questionId: string, optionKey: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionKey }));
  };

  useEffect(() => {
    const restoreQuizData = async () => {
      const [savedAnswers, savedStep] = await Promise.all([
        loadQuizAnswers(),
        loadQuizProgress(),
      ]);

      if (savedAnswers) setAnswers(savedAnswers);
      if (savedStep) setStep(savedStep);
    };
    restoreQuizData();
  }, []);

  return (
    <View style={styles.container}>
      <Stepper currentStep={step} totalSteps={allQuizQuestions.length} label={statName} />
      <View style={styles.chipContainer}>
        <Chip
          icon={<View style={styles.chipIcon} />}
          label={CHIP_LABEL[currentQuestion.stat]}
          backgroundColor={COLORS.CHIP_BG}
          borderColor={COLORS.BG_COMPONENTS}
          labelColor={COLORS.TEXT_DIM}
        />
      </View>
      <View>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
        <View style={styles.optionsContainer}>
          {currentQuestion.options.map((option, index) => (
            <QuizOption
              key={option.key}
              index={index}
              optionKey={option.key}
              label={option.label}
              isSelected={answers[currentQuestion.id] === option.key}
              onPress={() => handleAnswer(currentQuestion.id, option.key)}
            />
          ))}
        </View>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          label={step === 1 ? 'Atrás' : 'Anterior'}
          onPress={handlePreviousStep}
          variant='secondary'
          minWidth={80}
          iconLeft={<Ionicons name="arrow-back" size={20} color={COLORS.TEXT_DIM} />}
        />
        <Button
          label="Siguiente"
          onPress={handleNextStep}
          disabled={totalAnsweredQuestions < allQuizQuestions.length && !answers[currentQuestion.id]}
          variant='primary'
          iconRight={<Ionicons name="arrow-forward" size={20} color={COLORS.BLACK_DARK} />}
          minWidth={80}
          maxWidth={160}
        />
      </View>
    </View>
  );
};