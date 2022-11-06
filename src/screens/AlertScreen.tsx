import React from 'react';
import { Alert, Button, View } from 'react-native';
import { HeaderTitle } from '../components/HeaderTitle';

export const AlertScreen = () => {
  const showAlert = () => {
    Alert.alert(
      'Alert Title',
      'Este es el cuerpo de la alerta.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'destructive'
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ],
      {
        cancelable: true,
        onDismiss: () => console.log('onDismiss')

      }
    );
  }
  const showPromptIOS = () => {
    Alert.prompt(
      'Esta seguro?',
      'Este es el cuerpo del prompt.',
      (valor: string) => console.log(`Info: ${valor}`),
      'plain-text'
    );
  }

  return (
    <View>
      <HeaderTitle title='Alerts' />
      <Button
        title='Mostrar alerta'
        onPress={showAlert}
      />
      <View style={{flex: 1, marginBottom: 5}} />
      <Button
        title='Mostrar propmt'
        onPress={showPromptIOS}
      />
    </View>
  )
}
