import React from 'react';

import {Button, View, Text} from 'react-native';

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
      <Text
        style={{
          color: '#292b2c',
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
          color="#292b2c"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
      <View style={{padding: 10, width: '50%'}}>
        <Button
          title="Submissions"
          color="#292b2c"
          onPress={() => navigation.navigate('Submissions')}
        />
      </View>
      <View style={{padding: 10, width: '50%'}}>
        <Button
          title="Import"
          color="#292b2c"
          onPress={() => navigation.navigate('Import')}
        />
      </View>
    </View>
  );
}
