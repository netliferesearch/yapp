import React from 'react';
import { Text, View } from 'react-native';
import { theme } from '../../styles/theme';

export default function EmptyProgram() {
  return (
    <View>
      <Text style={{ marginBottom: theme.margins.sm }}>
        Add talks to your program by clicking the star next to what you want to attend on the program.
      </Text>
      <Text>Happy planning, and enjoy Y!</Text>
    </View>
  );
}
