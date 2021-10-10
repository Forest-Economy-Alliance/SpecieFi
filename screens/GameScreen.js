import React, {useState} from 'react';

import {
  Text,
  View,
  Image,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {DraxProvider, DraxView} from 'react-native-drax';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

import SoundPlayer from 'react-native-sound-player';

let counter = 0;

export function GameScreen({navigation, route}) {
  const {data, UserID} = route.params;
  const {Name, Age, Sex} = data;

  const [grid1, setgrid1] = React.useState([]);
  const [grid2, setgrid2] = React.useState([]);
  const [grid3, setgrid3] = React.useState([]);
  const [grid4, setgrid4] = React.useState([]);

  console.log('grid1', grid1);
  console.log('grid2', grid2);
  console.log('grid3', grid3);
  console.log('grid4', grid4);

  let imagePathDict = {
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
    imagePathDict[1],
    imagePathDict[2],
    imagePathDict[3],
    imagePathDict[4],
  ]);

  function updateGrid() {
    if (counter == 12) counter = 0;
    setimages([
      imagePathDict[counter + 1],
      imagePathDict[counter + 2],
      imagePathDict[counter + 3],
      imagePathDict[counter + 4],
    ]);
    counter += 4;
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
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid1([event.dragged.payload]);
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
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid2([event.dragged.payload]);
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
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid3([event.dragged.payload]);
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
                    </>
                  );
                }}
                onReceiveDragDrop={event => {
                  setgrid4([event.dragged.payload]);
                }}
              />
            </View>
          </View>

          <View style={styles.palette}>
            <TouchableOpacity
              onPress={() => SoundPlayer.playSoundFile('red', 'mp3')}>
              <DraxView
                style={[
                  styles.centeredContent,
                  styles.draggableBox,
                  styles.red,
                ]}
                draggingStyle={styles.dragging}
                dragReleasedStyle={styles.dragging}
                hoverDraggingStyle={styles.hoverDragging}
                dragPayload={'R'}
                longPressDelay={0}
                onDragStart={() =>
                  SoundPlayer.playSoundFile('red', 'mp3')
                }></DraxView>
            </TouchableOpacity>
            <DraxView
              style={[
                styles.centeredContent,
                styles.draggableBox,
                styles.green,
              ]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              hoverDraggingStyle={styles.hoverDragging}
              dragPayload={'G'}
              longPressDelay={0}
              onDragStart={() =>
                SoundPlayer.playSoundFile('green', 'mp3')
              }></DraxView>
            <DraxView
              style={[styles.centeredContent, styles.draggableBox, styles.blue]}
              draggingStyle={styles.dragging}
              dragReleasedStyle={styles.dragging}
              hoverDraggingStyle={styles.hoverDragging}
              dragPayload={'B'}
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
              hoverDraggingStyle={styles.hoverDragging}
              dragPayload={'Y'}
              longPressDelay={0}
              onDragStart={() =>
                SoundPlayer.playSoundFile('yellow', 'mp3')
              }></DraxView>
          </View>

          <View style={{margin: 20, padding: 20}}>
            <Button onPress={() => updateGrid()} title="Next" color="#121212" />
          </View>
        </View>
      </DraxProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 140,
    height: 140,
    borderRadius: 10,
  },
  container: {
    backgroundColor: '#f8f8ff',
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
    borderColor: 'red',
    borderWidth: 4,
  },
  incomingPayload: {
    marginTop: 10,
    fontSize: 24,
  },
  grid1: {
    color: '#121212',
    marginTop: 10,
    fontSize: 18,
  },
  grid2: {
    color: '#121212',
    marginTop: 10,
    fontSize: 18,
  },
  grid3: {
    color: '#121212',
    marginTop: 10,
    fontSize: 18,
  },
  grid4: {
    color: '#121212',
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
    color: '#aaffaa',
    backgroundColor: '#aaffaa',
  },
  blue: {
    color: '#aaaaff',
    backgroundColor: '#aaaaff',
  },
  red: {
    color: '#ffaaaa',
    backgroundColor: '#ffaaaa',
  },
  yellow: {
    color: '#ffffaa',
    backgroundColor: '#ffffaa',
  },
  cyan: {
    backgroundColor: '#aaffff',
  },
  ghostwhite: {
    backgroundColor: '#f8f8ff',
  },
  dragging: {
    opacity: 0.2,
  },
  hoverDragging: {
    borderColor: '#121212',
    borderWidth: 2,
  },
});
