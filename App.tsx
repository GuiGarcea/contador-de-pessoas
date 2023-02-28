import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const incrementcontador = () => {
    setContador(contador + 1);
  };

  const decrementcontador = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 16 }}>Contador de Pessoas</Text>
      <Text style={{ fontSize: 64, marginBottom: 16 }}>{contador}</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button title="+" onPress={incrementcontador} />
        <Button title="-" onPress={decrementcontador} />
      </View>
    </View>
  );
}
