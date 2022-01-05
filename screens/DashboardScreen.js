import React, {useState} from 'react';
import {Button, Image, Text, ScrollView, View, StyleSheet} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import FileSystem from 'react-native-fs';
import DocumentPicker from 'react-native-document-picker';

import Share from 'react-native-share';

export function DashboardScreen() {
  const [images, setImages] = useState(null);
  const [nImages, setNImages] = useState(0);

  const [audios, setAudios] = useState(null);
  const [nAudios, setNAudios] = useState(0);

  const [submissions, setSubmissions] = useState(null);
  const [nSubmissions, setNSubmissions] = useState(0);

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

  FileSystem.readDir(FileSystem.ExternalDirectoryPath + '/submissions').then(
    files => {
      setNSubmissions(files.length);
    },
  );

  function importPictures() {
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

  function importAudios() {
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

  function importSubmissions() {
    DocumentPicker.pick({
      allowMultiSelection: true,
      type: [DocumentPicker.types.allFiles],
      copyTo: 'documentDirectory',
    }).then(submissions => {
      setAudios(submissions);
      for (let i = 0; i < submissions.length; i++) {
        let file_name = submissions[i].name;

        let dest_path =
          FileSystem.ExternalDirectoryPath + '/submissions' + '/' + file_name;

        FileSystem.copyFile(submissions[i].uri, dest_path).then(() => {
          FileSystem.readDir(
            FileSystem.ExternalDirectoryPath + '/submissions',
          ).then(files => {
            setNAudios(files.length);
          });
        });
      }
    });
  }

  function shareImages() {}

  function shareAudios() {}

  function shareSubmissions() {}

  return (
    <ScrollView>
      <View style={[styles.container, styles.imagesContainer]}>
        <Text style={styles.title}>IMAGES</Text>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            borderRadius: 10,
          }}>
          <Button title="Import" color={'#ff916f'} onPress={importPictures} />
          <View
            style={{
              margin: 5,
            }}></View>
          <Button title="Export" color={'#ff916f'} onPress={shareImages} />
        </View>
        <Text style={styles.title}>{nImages} Image(s) Present</Text>
      </View>
      <View style={[styles.container, styles.audiosContainer]}>
        <Text style={styles.title}>AUDIOS</Text>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            borderRadius: 10,
          }}>
          <Button title="Import" color={'#ffca4d'} onPress={importAudios} />
          <View
            style={{
              margin: 5,
            }}></View>
          <Button title="Export" color={'#ffca4d'} onPress={shareAudios} />
        </View>
        <Text style={styles.title}>{nAudios} Audio(s) Present</Text>
      </View>
      <View style={[styles.container, styles.submissionsContainer]}>
        <Text style={styles.title}>SUBMISSIONS</Text>
        <View
          style={{
            flexDirection: 'row',
            margin: 10,
            borderRadius: 10,
          }}>
          <Button
            title="Import"
            color={'#b3a4f7'}
            onPress={importSubmissions}
          />
          <View
            style={{
              margin: 5,
            }}></View>
          <Button title="Export" color={'#b3a4f7'} onPress={shareSubmissions} />
        </View>
        <Text style={styles.title}>{nSubmissions} Submission(s) Present</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#f7f7f7',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  imagesContainer: {
    backgroundColor: '#FF5722',
    padding: 20,
    borderRadius: 10,
  },
  audiosContainer: {
    backgroundColor: '#FFB300',
    padding: 20,
    borderRadius: 10,
  },
  submissionsContainer: {
    backgroundColor: '#785EF0',
    padding: 20,
    borderRadius: 10,
  },
});
