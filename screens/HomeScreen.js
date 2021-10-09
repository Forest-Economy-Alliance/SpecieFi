import React from 'react';

import {Button, View, Text} from 'react-native';

export function HomeScreen({navigation}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f8f8ff',
      }}>
      <Text
        style={{
          color: '#121212',
          fontFamily: 'LeckerliOne',
          fontSize: 70,
          width: '100%',
          textAlign: 'center',
        }}>
        Specifi
      </Text>
      <View style={{padding: 10, width: '50%'}}>
        <Button
          title="Start"
          color="#121212"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </View>
  );
}
