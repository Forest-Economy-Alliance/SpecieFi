import * as React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

import {useForm, Controller} from 'react-hook-form';
import {sha256} from 'js-sha256';
import DocumentPicker from 'react-native-document-picker';

export function DetailsScreen({navigation, route}) {
  const {handleSubmit, control, reset} = useForm({
    defaultValues: {
      Name: '',
      Age: '',
      Sex: '',
    },
  });

  function Generate_UserID(data) {
    var {Name, Age, Sex} = data;
    Name = Name.replace(/ /g, '_');
    var user_info = Name + Age + Sex;
    user_info = user_info.replace(/ /g, '_');
    var shuffled_user_info = user_info
      .split('')
      .sort(function () {
        return 0.5 - Math.random();
      })
      .join('');
    const UserID = Name + '_' + sha256(shuffled_user_info);
    return UserID;
  }

  async function onSubmit(data) {
    const FolderPath = (await DocumentPicker.pickDirectory()).uri;
    const UserID = Generate_UserID(data);
    navigation.navigate('Game', {data, UserID, FolderPath});
  }

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.DetailsInput}>
            <TextInput
              onBlur={onBlur}
              color="#121212"
              placeholder="Full Name"
              placeholderTextColor="#262626"
              onChangeText={value => onChange(value)}
              value={value}
            />
          </View>
        )}
        name="Name"
        rules={{required: true}}
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.DetailsInput}>
            <TextInput
              onBlur={onBlur}
              color="#121212"
              placeholder="Age"
              placeholderTextColor="#262626"
              onChangeText={value => onChange(value)}
              value={value}
            />
          </View>
        )}
        name="Age"
        rules={{required: true}}
      />
      <Controller
        control={control}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={styles.DetailsInput}>
            <TextInput
              onBlur={onBlur}
              color="#121212"
              placeholder="Sex"
              placeholderTextColor="#262626"
              onChangeText={value => onChange(value)}
              value={value}
            />
          </View>
        )}
        name="Sex"
        rules={{required: true}}
      />

      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{padding: 5, width: '25%'}}>
          <Button
            color="#B81D13"
            title="Reset Details"
            onPress={() => {
              reset({
                Name: '',
                Age: '',
                Sex: '',
              });
            }}
          />
        </View>
        <View style={{padding: 5, width: '25%'}}>
          <Button
            title="Start Game"
            color="#008450"
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
  button: {
    backgroundColor: '#121212',
    borderRadius: 5,
    padding: 10,
    margin: 10,
  },
  DetailsInput: {
    width: '70%',
    borderWidth: 2.5,
    borderRadius: 10,
    margin: 5,
    padding: 5,
  },
});
