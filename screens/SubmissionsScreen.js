import React from 'react';

import {Button, View, Text, FlatList} from 'react-native';

import FileSystem from 'react-native-fs';

export function SubmissionsScreen({navigation, route}) {
  var submissionsPaths = ['submissions/'];

  FileSystem.readDir(FileSystem.ExternalDirectoryPath)
    .then(files => {
      // console.log(JSON.stringify(files, null, 4));
      for (let i = 0; i < files.length; i++)
        submissionsPaths.push(files[i].name);
      console.log(submissionsPaths);
      submissionsPaths.shift();
    })
    .catch(err => {
      console.log(err.message);
    });

  function openFile(fileName) {
    FileSystem.readFile(
      FileSystem.ExternalDirectoryPath + '/' + fileName,
      'utf8',
    )
      .then(success => {
        alert(success);
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
        backgroundColor: '#f7f7f7',
        marginTop: 30,
      }}>
      <View
        style={{
          marginHorizontal: 40,
          backgroundColor: '#f7f7f7',
        }}>
        <FlatList
          data={submissionsPaths}
          renderItem={({item}) => (
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 10,
                backgroundColor: '#f7f7f7',
                borderRadius: 10,
              }}>
              <Button
                title={item}
                onPress={() => {
                  openFile(item);
                }}
              />
            </View>
          )}
        />
      </View>
    </View>
  );
}
