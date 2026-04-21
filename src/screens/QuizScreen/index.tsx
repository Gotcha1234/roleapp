import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Stepper } from '../../components/Stepper';
import { createStyles } from './styled';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Chip } from '../../components/Chip';
import { COLORS } from '../../constants/theme';
import { loadQuizAnswers, loadQuizProgress } from '../../store/quizStorage';
import { allQuizQuestions } from '../../constants/quizQuestions';
import { QuizOption } from '../../components/QuizOption';

export const QuizScreen = () => {
  const insets = useSafeAreaInsets();
  const styles = createStyles({ top: insets.top, bottom: insets.bottom });
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});

  const handleAnswer = (questionId: string, optionKey: string) => {
    console.log('Selected answer ==> :', {
      questionId, optionKey
    });
    setAnswers(prev => ({ ...prev, [questionId]: optionKey }));
  };

  const currentQuestion = allQuizQuestions[step - 1]

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
      <Stepper currentStep={step} totalSteps={allQuizQuestions.length} label={currentQuestion.stat} />
      <Chip
        label={currentQuestion.stat}
        backgroundColor={COLORS.CHIP_BG}
        borderColor={COLORS.BG_COMPONENTS}
        labelColor={COLORS.TEXT_DIM}
      />
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
    </View>
  );
};