import React, {useState} from 'react';
import {Button, Image, Text, ScrollView, View} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
// import FilePicker from 'react-native-file-picker';
import FileSystem from 'react-native-fs';

export function ImportScreen({navigation}) {
  const [images, setImages] = useState(null);
  const [nImages, setNImages] = useState(0);

  const [audios, setAudios] = useState(null);
  const [nAudios, setNAudios] = useState(0);

  // FileSystem.readDir(FileSystem.ExternalDirectoryPath + '/images')
  //   .then(files => {
  //     setNImages(files.length);
  //   })
  //   .catch(err => {
  //     console.log(err.message);
  //   });

  // FileSystem.readDir(FileSystem.ExternalDirectoryPath + '/audios')
  //   .then(files => {
  //     setNAudios(files.length);
  //   })
  //   .catch(err => {
  //     console.log(err.message);
  //   });

  function pickMultipleImages() {
    ImagePicker.openPicker({
      multiple: true,
      includeExif: true,
      mediaType: 'photo',
    })
      .then(images => {
        setImages(images);
        for (let i = 0; i < images.length; i++) {
          let file_name = images[i].path.split('/');
          file_name = file_name[file_name.length - 1];

          let dest_path =
            FileSystem.ExternalDirectoryPath + '/images' + '/' + file_name;

          FileSystem.copyFile(images[i].path, dest_path)
            .then(() => {
              FileSystem.readDir(FileSystem.ExternalDirectoryPath + '/images')
                .then(files => {
                  setNImages(files.length);
                  console.log(files.length);
                })
                .catch(err => {
                  console.log(err.message);
                });
            })
            .catch(err => {
              console.log(err.message);
            });
        }
      })
      .catch(e => {
        console.log(e);
      });
  }

  function pickMultipleAudios() {
    // FilePicker.open({
    //   multiple: true,
    //   mediaType: 'audio',
    // })
    //   .then(audios => {
    //     setAudios(audios);
    //     for (let i = 0; i < audios.length; i++) {
    //       let file_name = audios[i].path.split('/');
    //       file_name = file_name[file_name.length - 1];
    //       let dest_path =
    //         FileSystem.ExternalDirectoryPath + '/audios' + '/' + file_name;
    //       FileSystem.copyFile(audios[i].path, dest_path)
    //         .then(() => {
    //           FileSystem.readDir(FileSystem.ExternalDirectoryPath + '/aud_data')
    //             .then(files => {
    //               setNAudios(files.length);
    //               console.log(files.length);
    //             })
    //             .catch(err => {
    //               console.log(err.message);
    //             });
    //           console.log('Moved', file_name);
    //         })
    //         .catch(err => {
    //           console.log(err.message);
    //         });
    //     }
    //   })
    //   .catch(e => {
    //     console.log(e);
    //   });
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
