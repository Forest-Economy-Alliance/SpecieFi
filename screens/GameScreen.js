import React, {useState} from 'react';

import {View, Image, StyleSheet, Button, Text} from 'react-native';
import {DraxProvider, DraxView} from 'react-native-drax';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import SoundPlayer from 'react-native-sound-player';

export function GameScreen({navigation, route}) {
  const {data, UserID} = route.params;

  const IterationID =
    (100000 + Math.random() * 1000000).toFixed(0).toString() + '_' + UserID;

  const [json, setjson] = useState({
    name: data.Name,
    age: data.Age,
    sex: data.Sex,
    id: UserID,
    iteration: IterationID,
    classifications: {},
  });

  let imagePaths = {
    1: require('../assets/images/1.jpg'),
    2: require('../assets/images/2.jpg'),
    3: require('../assets/images/3.jpg'),
    4: require('../assets/images/4.jpg'),
    5: require('../assets/images/5.jpg'),
    6: require('../assets/images/6.jpg'),
    7: require('../assets/images/7.jpg'),
    8: require('../assets/images/8.jpg'),
    9: require('../assets/images/9.jpg'),
    10: require('../assets/images/10.jpg'),
    11: require('../assets/images/11.jpg'),
    12: require('../assets/images/12.jpg'),
  };

  const [images, setimages] = useState([
    imagePaths[1],
    imagePaths[2],
    imagePaths[3],
    imagePaths[4],
  ]);

  const [grid1, setgrid1] = React.useState('');
  const [grid2, setgrid2] = React.useState('');
  const [grid3, setgrid3] = React.useState('');
  const [grid4, setgrid4] = React.useState('');

  // console.log('grid1', grid1);
  // console.log('grid2', grid2);
  // console.log('grid3', grid3);
  // console.log('grid4', grid4);

  const [score, setScore] = useState(4);

  function updateGrid() {
    json.classifications[score - 3] = grid1;
    json.classifications[score - 2] = grid2;
    json.classifications[score - 1] = grid3;
    json.classifications[score - 0] = grid4;

    if (score == 12) {
      // console.log('GAME JSON:', JSON.stringify(json, null, 4));
      navigation.navigate('Results', {json});
      return;
    }

    setimages([
      imagePaths[score + 1],
      imagePaths[score + 2],
      imagePaths[score + 3],
      imagePaths[score + 4],
    ]);

    setScore(score + 4);

    setgrid1('');
    setgrid2('');
    setgrid3('');
    setgrid4('');
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <DraxProvider>
        <View style={styles.container}>
          <View style={styles.allImages}>
            <View style={styles.imageContainer}>
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.receivingZone,
                  styles.ghostwhite,
                ]}
                receivingStyle={styles.receiving}
                renderContent={() => {
                  return (
                    <>
                      <Image
                        style={styles.image}
                        source={images[0]}
                        resizeMode="cover"
                      />
                      <Text style={{color: '#292b2c'}}>{grid1}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid1(event.dragged.payload);
                }}
              />
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.receivingZone,
                  styles.ghostwhite,
                ]}
                receivingStyle={styles.receiving}
                renderContent={() => {
                  return (
                    <>
                      <Image
                        style={styles.image}
                        source={images[1]}
                        resizeMode="cover"
                      />
                      <Text style={{color: '#292b2c'}}>{grid2}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid2(event.dragged.payload);
                }}
              />
            </View>

            <View style={styles.imageContainer}>
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.receivingZone,
                  styles.ghostwhite,
                ]}
                receivingStyle={styles.receiving}
                renderContent={() => {
                  return (
                    <>
                      <Image
                        style={styles.image}
                        source={images[2]}
                        resizeMode="cover"
                      />
                      <Text style={{color: '#292b2c'}}>{grid3}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid3(event.dragged.payload);
                }}
              />
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.receivingZone,
                  styles.ghostwhite,
                ]}
                receivingStyle={styles.receiving}
                renderContent={() => {
                  return (
                    <>
                      <Image
                        style={styles.image}
                        source={images[3]}
                        resizeMode="cover"
                      />
                      <Text style={{color: '#292b2c'}}>{grid4}</Text>
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid4(event.dragged.payload);
                }}
              />
            </View>
          </View>

          <View style={styles.palette}>
            <DraxView
              style={[styles.centeredContent, styles.draggableBox, styles.red]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Red'}
              longPressDelay={0}
              onDragStart={() =>
                SoundPlayer.playSoundFile('red', 'mp3')
              }></DraxView>
            <DraxView
              style={[
                styles.centeredContent,
                styles.draggableBox,
                styles.green,
              ]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Green'}
              longPressDelay={0}
              onDragStart={() =>
                SoundPlayer.playSoundFile('green', 'mp3')
              }></DraxView>
            <DraxView
              style={[styles.centeredContent, styles.draggableBox, styles.blue]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Blue'}
              longPressDelay={0}
              onDragStart={() =>
                SoundPlayer.playSoundFile('blue', 'mp3')
              }></DraxView>
            <DraxView
              style={[
                styles.centeredContent,
                styles.draggableBox,
                styles.yellow,
              ]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              dragPayload={'Yellow'}
              longPressDelay={0}
              onDragStart={() =>
                SoundPlayer.playSoundFile('yellow', 'mp3')
              }></DraxView>
          </View>

          <View style={{margin: 20, padding: 20}}>
            <Button onPress={() => updateGrid()} title="Next" color="#292b2c" />
          </View>
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
    padding: 12,
    paddingTop: 40,
    justifyContent: 'space-evenly',
  },
  allImages: {
    flex: 1,
    padding: 15,
    paddingTop: 40,
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  centeredContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  receivingZone: {
    height: 150,
    width: 150,
    borderRadius: 15,
  },
  receiving: {
    borderColor: '#292b2c',
    borderWidth: 4,
  },
  incomingPayload: {
    marginTop: 10,
    fontSize: 24,
  },
  grid1: {
    color: '#292b2c',
    marginTop: 10,
    fontSize: 18,
  },
  grid2: {
    color: '#292b2c',
    marginTop: 10,
    fontSize: 18,
  },
  grid3: {
    color: '#292b2c',
    marginTop: 10,
    fontSize: 18,
  },
  grid4: {
    color: '#292b2c',
    marginTop: 10,
    fontSize: 18,
  },
  palette: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  Audiopalette: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
  },
  draggableBox: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  audioButton: {
    width: '25%',
    borderRadius: 10,
  },
  green: {
    color: '#5cb85c',
    backgroundColor: '#5cb85c',
  },
  blue: {
    color: '#5bc0de',
    backgroundColor: '#5bc0de',
  },
  red: {
    color: '#d9534f',
    backgroundColor: '#d9534f',
  },
  yellow: {
    color: '#f0ad4e',
    backgroundColor: '#f0ad4e',
  },
  ghostwhite: {
    backgroundColor: '#f7f7f7',
  },
  dragging: {
    opacity: 0.2,
  },
});
