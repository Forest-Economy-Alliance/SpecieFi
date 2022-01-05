import React from 'react';

import {Button, View, Text, ImageBackground} from 'react-native';

import FileSystem from 'react-native-fs';

export function HomeScreen({navigation}) {
  FileSystem.mkdir(FileSystem.ExternalDirectoryPath + '/submissions');
  FileSystem.mkdir(FileSystem.ExternalDirectoryPath + '/images');
  FileSystem.mkdir(FileSystem.ExternalDirectoryPath + '/audios');

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f7f7f7',
      }}>
      <ImageBackground
        source={require('../assets/images/Specifi-bg.png')}
        style={{width: '100%', height: '100%', flex: 1}}>
        <Text
          style={{
            color: '#5C7269',
            fontFamily: 'PlayfairDisplay',
            fontSize: 70,
            width: '100%',
            textAlign: 'center',
            marginTop: '40%',
            marginBottom: '10%',
          }}>
          Specifi
        </Text>
        <View
          style={{
            paddingHorizontal: '30%',
            paddingVertical: 10,
            width: '100%',
          }}>
          <Button
            title="Start"
            color="#5C7269"
            onPress={() => navigation.navigate('Details')}
          />
        </View>
        <View
          style={{
            paddingHorizontal: '30%',
            paddingVertical: 10,
            width: '100%',
          }}>
          <Button
            title="Submissions"
            color="#5C7269"
            onPress={() => navigation.navigate('Submissions')}
          />
        </View>
        <View
          style={{
            paddingHorizontal: '30%',
            paddingVertical: 10,
            width: '100%',
          }}>
          <Button
            title="Dashboard"
            color="#5C7269"
            onPress={() => navigation.navigate('Dashboard')}
          />
        </View>
      </ImageBackground>
    </View>
  );
}
