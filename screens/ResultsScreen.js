import React from 'react';

import {Button, View, Text} from 'react-native';

import FileSystem from 'react-native-fs';

export function ResultsScreen({navigation, route}) {
  const {json, IterationID} = route.params;
  // console.log('Results JSON:', JSON.stringify(json, null, 4));

  function DownloadJSON() {
    const jsonString = JSON.stringify(json, null, 4);
    const fileName = IterationID + '.json';

    var path = FileSystem.ExternalDirectoryPath + '/submissions/' + fileName;

    FileSystem.writeFile(path, jsonString, 'utf8').then(success => {
      alert('File written to ' + path);
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
          fontFamily: 'PlayfairDisplay',
          fontSize: 70,
          width: '100%',
          textAlign: 'center',
          marginBottom: 30,
        }}>
        SpecieFi
      </Text>
      <View style={{padding: 10, width: '25%'}}>
        <Button
          color="#FE6100"
          title="Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <View style={{padding: 10, width: '50%'}}>
        <Button
          title="Download Results"
          color="#785EF0"
          onPress={DownloadJSON}
        />
      </View>
    </View>
  );
}
