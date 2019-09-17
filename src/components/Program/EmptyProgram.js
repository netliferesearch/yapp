import React from 'react';
import { Text, View } from 'react-native';
import { theme, font } from '../../styles/theme';

export default function EmptyProgram() {
  return (
    <View>
      <Text style={[{ marginBottom: theme.margins.sm }, font.smRegular]}>
        Add talks to your program by clicking the star next to what you want to attend on the program.
      </Text>
      <Text style={font.smRegular}>Happy planning, and enjoy Y!</Text>
    </View>
  );
}
