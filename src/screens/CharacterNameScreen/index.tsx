import React from 'react';
import { View, Text } from 'react-native';

export const CharacterNameScreen = () => {
  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#0f0f1a' }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8, paddingHorizontal: 24, paddingVertical: 20 }}>
        <Text style={{ fontSize: 16, color: '#c9a84c' }}>←</Text>
        <Text style={{ fontSize: 16, color: '#c9a84c' }}>Volver</Text>
      </View>
      <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#e8e0d0' }}>Tu personaje</Text>
      <Text style={{ fontSize: 16, color: '#8a8299' }}>¿Cómo quieres que te llamen en tu aventura?</Text>
      <View style={{ height: 1, borderWidth: 1, borderColor: 'rgba(255,255,255,0.06)', marginTop: 16 }} />
      <View style={{ marginTop: 24 }}>
        <Text style={{ fontSize: 16, color: '#e8e0d0' }}>NOMBRE DEL PERSONAJE</Text>
      </View>
    </View>
  );
};

