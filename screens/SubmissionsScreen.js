import React, {useState} from 'react';

import {Button, View, Text, FlatList} from 'react-native';

import FileSystem from 'react-native-fs';

import Dialog from 'react-native-dialog';

export function SubmissionsScreen({navigation, route}) {
  var submissionsPaths = ['Submissions'];

  FileSystem.readDir(FileSystem.ExternalDirectoryPath + '/submissions/')
    .then(files => {
      for (let i = 0; i < files.length; i++) {
        submissionsPaths.push(files[i].name);
      }
    })
    .catch(err => {
      console.log(err.message);
    });

  function openFile(fileName) {
    FileSystem.readFile(
      FileSystem.ExternalDirectoryPath + '/submissions/' + fileName,
      'utf8',
    )
      .then(success => {
        alert(success);
      })
      .catch(err => {
        console.log(err.message);
      });
  }

  const [visible, setVisible] = useState(true);
  const [authorized, setAuthorized] = useState(false);

  function handleAuthorize(code) {
    if (code == 2580) {
      console.log('Authorized');
      setAuthorized(true);
      setVisible(false);
    }
  }

  function showSubmissions() {
    return (
      <View>
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
          keyExtractor={item => item}
        />
      </View>
    );
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f7f7f7',
      }}>
      <View
        style={{
          marginHorizontal: 40,
          backgroundColor: '#f7f7f7',
        }}>
        <View>
          <Dialog.Container
            visible={visible}
            onBackdropPress={() => navigation.navigate('Home')}>
            <Dialog.Title>Authorization</Dialog.Title>
            <Dialog.Description>
              Enter your authorization code to view the submissions.
            </Dialog.Description>
            <Dialog.Input
              label="Code"
              keyboardType="numeric"
              onChangeText={text => handleAuthorize(text)}
            />
            <Dialog.Button
              label="Back"
              onPress={() => navigation.navigate('Home')}
            />
          </Dialog.Container>

          {authorized ? showSubmissions() : null}
        </View>
      </View>
    </View>
  );
}
