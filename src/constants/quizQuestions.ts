import { QuizQuestion } from "../types"

export const strengthQuestions: QuizQuestion[] = [
  {
    id: 'strength-frequency',
    stat: 'strength',
    dimension: 'frequency',
    question: '¿Cuántos días entrenaste fuerza en las últimas 2 semanas?',
    options: [
      { key: 'none', label: '0 días', score: 0 },
      { key: 'low', label: '1 día', score: 1 },
      { key: 'medium', label: '2–3 días', score: 2 },
      { key: 'high', label: '4+ días', score: 3 },
    ]
  },
  {
    id: 'strength-intensity',
    stat: 'strength',
    dimension: 'intensity',
    question: 'Cuando entrenas, ¿qué tan cerca llegas al fallo muscular?',
    options: [
      { key: 'none', label: 'No entreno', score: 0 },
      { key: 'low', label: 'Ligero (podría hacer mucho más)', score: 1 },
      { key: 'medium', label: 'Moderado (me cuesta terminar)', score: 2 },
      { key: 'high', label: 'Intenso (cerca del fallo)', score: 3 },
    ]
  },
  {
    id: 'strength-system',
    stat: 'strength',
    dimension: 'system',
    question: '¿Llevas una rutina estructurada o progresión?',
    options: [
      { key: 'none', label: 'No', score: 0 },
      { key: 'low', label: 'Improviso', score: 1 },
      { key: 'medium', label: 'Algo constante', score: 2 },
      { key: 'high', label: 'Rutina estructurada con progresión', score: 3 },
    ]
  }
] as const;

export const intelligenceQuestions: QuizQuestion[] = [
  {
    id: 'intelligence-frequency',
    stat: 'intelligence',
    dimension: 'frequency',
    question: '¿Cuántos días leíste contenido largo (libros/artículos)?',
    options: [
      { key: 'none', label: '0 días', score: 0 },
      { key: 'low', label: '1–2 días', score: 1 },
      { key: 'medium', label: '3–4 días', score: 2 },
      { key: 'high', label: '5+ días', score: 3 },
    ]
  },
  {
    id: 'intelligence-intensity',
    stat: 'intelligence',
    dimension: 'intensity',
    question: '¿Qué tan exigente es lo que lees?',
    options: [
      { key: 'none', label: 'No leo', score: 0 },
      { key: 'low', label: 'Contenido ligero', score: 1 },
      { key: 'medium', label: 'Contenido moderado', score: 2 },
      { key: 'high', label: 'Contenido complejo/profundo', score: 3 },
    ]
  },
  {
    id: 'intelligence-system',
    stat: 'intelligence',
    dimension: 'system',
    question: '¿Lees con un objetivo claro (aprender algo específico)?',
    options: [
      { key: 'none', label: 'Nunca', score: 0 },
      { key: 'low', label: 'A veces', score: 1 },
      { key: 'medium', label: 'Frecuentemente', score: 2 },
      { key: 'high', label: 'Casi siempre', score: 3 },
    ]
  }
] as const;

export const resistanceQuestions: QuizQuestion[] = [
  {
    id: 'endurance-frequency',
    stat: 'endurance',
    dimension: 'frequency',
    question: '¿Cuántos días hiciste cardio?',
    options: [
      { key: 'none', label: '0 días', score: 0 },
      { key: 'low', label: '1 día', score: 1 },
      { key: 'medium', label: '2–3 días', score: 2 },
      { key: 'high', label: '4+ días', score: 3 },
    ]
  },
  {
    id: 'endurance-intensity',
    stat: 'endurance',
    dimension: 'intensity',
    question: '¿Cuánto dura tu sesión promedio de cardio?',
    options: [
      { key: 'none', label: 'No hago', score: 0 },
      { key: 'low', label: '10–15 min', score: 1 },
      { key: 'medium', label: '20–40 min', score: 2 },
      { key: 'high', label: '45+ min', score: 3 },
    ]
  },
  {
    id: 'endurance-system',
    stat: 'endurance',
    dimension: 'system',
    question: '¿Qué tan constante eres con el cardio?',
    options: [
      { key: 'none', label: 'Nada constante', score: 0 },
      { key: 'low', label: 'A veces', score: 1 },
      { key: 'medium', label: 'Bastante constante', score: 2 },
      { key: 'high', label: 'Rutina fija', score: 3 },
    ]
  }
]

export const wisdomQuestions: QuizQuestion[] = [
  {
    id: 'wisdom-frequency',
    stat: 'wisdom',
    dimension: 'frequency',
    question: '¿Cuántos días aprendiste algo nuevo de forma intencional?',
    options: [
      { key: 'none', label: '0', score: 0 },
      { key: 'low', label: '1–2', score: 1 },
      { key: 'medium', label: '3–4', score: 2 },
      { key: 'high', label: '5+', score: 3 },
    ]
  },
  {
    id: 'wisdom-intensity',
    stat: 'wisdom',
    dimension: 'intensity',
    question: '¿Qué tan profundo fue ese aprendizaje?',
    options: [
      { key: 'none', label: 'Nada', score: 0 },
      { key: 'low', label: 'Consumo ligero (videos)', score: 1 },
      { key: 'medium', label: 'Práctica (curso/tarea)', score: 2 },
      { key: 'high', label: 'Proyecto o aplicación real', score: 3 },
    ]
  },
  {
    id: 'wisdom-system',
    stat: 'wisdom',
    dimension: 'system',
    question: '¿Aplicas lo aprendido en tu vida?',
    options: [
      { key: 'none', label: 'Nunca', score: 0 },
      { key: 'low', label: 'A veces', score: 1 },
      { key: 'medium', label: 'Frecuentemente', score: 2 },
      { key: 'high', label: 'Casi siempre', score: 3 },
    ]
  }
]

export const faithQuestions: QuizQuestion[] = [
  {
    id: 'faith-frequency',
    stat: 'faith',
    dimension: 'frequency',
    question: '¿Cuántos días hiciste meditación o relajación?',
    options: [
      { key: 'none', label: '0', score: 0 },
      { key: 'low', label: '1–2', score: 1 },
      { key: 'medium', label: '3–4', score: 2 },
      { key: 'high', label: '5+', score: 3 },
    ]
  },
  {
    id: 'faith-intensity',
    stat: 'faith',
    dimension: 'intensity',
    question: '¿Cuánto dura tu práctica promedio?',
    options: [
      { key: 'none', label: 'No hago', score: 0 },
      { key: 'low', label: '1–5 min', score: 1 },
      { key: 'medium', label: '6–15 min', score: 2 },
      { key: 'high', label: '16+ min', score: 3 },
    ]
  },
  {
    id: 'faith-system',
    stat: 'faith',
    dimension: 'system',
    question: '¿Qué tan efectiva es para regularte?',
    options: [
      { key: 'none', label: 'No ayuda', score: 0 },
      { key: 'low', label: 'Poco', score: 1 },
      { key: 'medium', label: 'Bastante', score: 2 },
      { key: 'high', label: 'Mucho (hábito clave)', score: 3 },
    ]
  }
]

export const magicQuestions: QuizQuestion[] = [
  {
    id: 'magic-frequency',
    stat: 'magic',
    dimension: 'frequency',
    question: '¿Qué tanto cuidas activamente tu bienestar mental?',
    options: [
      { key: 'none', label: 'Nada', score: 0 },
      { key: 'low', label: 'Poco', score: 1 },
      { key: 'medium', label: 'Bastante', score: 2 },
      { key: 'high', label: 'Mucho', score: 3 },
    ]
  },
  {
    id: 'magic-intensity',
    stat: 'magic',
    dimension: 'intensity',
    question: '¿Con qué frecuencia haces prácticas de salud mental?',
    options: [
      { key: 'none', label: 'Nunca', score: 0 },
      { key: 'low', label: '1 vez/semana', score: 1 },
      { key: 'medium', label: '2–3 veces/semana', score: 2 },
      { key: 'high', label: '4+ veces/semana', score: 3 },
    ]
  },
  {
    id: 'magic-system',
    stat: 'magic',
    dimension: 'system',
    question: '¿Cómo manejas el estrés cuando se dispara?',
    options: [
      { key: 'none', label: 'Me rebasa', score: 0 },
      { key: 'low', label: 'Lo aguanto', score: 1 },
      { key: 'medium', label: 'Tengo herramientas', score: 2 },
      { key: 'high', label: 'Tengo un sistema sólido', score: 3 },
    ]
  }
]
