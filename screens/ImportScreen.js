import React, {useState} from 'react';
import {Button, Image, Text, ScrollView, View} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import FileSystem from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';
import Sound from 'react-native-sound';

export function ImportScreen() {
  const [images, setImages] = useState(null);
  const [nImages, setNImages] = useState(0);

  const [audios, setAudios] = useState(null);
  const [nAudios, setNAudios] = useState(0);

  FileSystem.readDir(FileSystem.ExternalDirectoryPath + '/images').then(
    files => {
      setNImages(files.length);
    },
  );

  FileSystem.readDir(FileSystem.ExternalDirectoryPath + '/audios').then(
    files => {
      setNAudios(files.length);
    },
  );

  function pickMultipleImages() {
    ImagePicker.openPicker({
      multiple: true,
      includeExif: true,
      mediaType: 'photo',
    }).then(images => {
      setImages(images);
      for (let i = 0; i < images.length; i++) {
        let file_name = images[i].path.split('/');
        file_name = file_name[file_name.length - 1];

        let dest_path =
          FileSystem.ExternalDirectoryPath + '/images' + '/' + file_name;

        FileSystem.copyFile(images[i].path, dest_path).then(() => {
          FileSystem.readDir(FileSystem.ExternalDirectoryPath + '/images').then(
            files => {
              setNImages(files.length);
            },
          );
        });
      }
    });
  }

  function pickMultipleAudios() {
    DocumentPicker.pick({
      allowMultiSelection: true,
      type: [DocumentPicker.types.audio],
      copyTo: 'documentDirectory',
    }).then(audios => {
      setAudios(audios);
      for (let i = 0; i < audios.length; i++) {
        let file_name = audios[i].name;

        let dest_path =
          FileSystem.ExternalDirectoryPath + '/audios' + '/' + file_name;

        FileSystem.copyFile(audios[i].uri, dest_path).then(() => {
          FileSystem.readDir(FileSystem.ExternalDirectoryPath + '/audios').then(
            files => {
              setNAudios(files.length);
            },
          );
        });
      }
    });
  }

  return (
    <ScrollView>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Button
          title="Import Images"
          onPress={() => {
            pickMultipleImages();
          }}
        />
        <Text
          style={{
            color: '#000',
            fontSize: 20,
          }}>
          {nImages} Image(s)
        </Text>
      </View>
      <View
        style={{
          marginTop: 20,
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        <Button
          title="Import Audios"
          onPress={() => {
            pickMultipleAudios();
          }}
        />
        <Text
          style={{
            color: '#000',
            fontSize: 20,
          }}>
          {nAudios} Audio(s)
        </Text>
      </View>
    </ScrollView>
  );
}
