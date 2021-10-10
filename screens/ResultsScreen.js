import React from 'react';

import {Button, View, Text} from 'react-native';

import FileSystem from 'react-native-fs';

export function ResultsScreen({navigation, route}) {
  const {json, IterationID} = route.params;
  console.log('Results JSON:', JSON.stringify(json, null, 4));

  function DownloadJSON() {
    const jsonString = JSON.stringify(json, null, 4);
    const fileName = IterationID + '.json';

    var path = FileSystem.ExternalDirectoryPath + '/' + fileName;
    console.log('PATH', path);

    FileSystem.writeFile(path, jsonString, 'utf8')
      .then(success => {
        console.log('FILE WRITTEN!');
        alert('File written to ' + path);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

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
      <View style={{padding: 10, width: '25%'}}>
        <Button
          color="#d9534f"
          title="Restart"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={{padding: 10, width: '50%'}}>
        <Button
          title="Download Results"
          color="#5cb85c"
          onPress={DownloadJSON}
        />
      </View>
    </View>
  );
}
