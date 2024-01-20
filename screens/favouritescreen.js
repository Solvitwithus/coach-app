import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const chitchat = () => {
  const [sport, setSport] = useState([
    {"id":"1", "type":"football", "image": require('./Assets/OIP-removebg-preview.png')},
    {"id":"2", "type":"basket"},
    {"id":"3", "type":"volleyball"},
    {"id":"4", "type":"hockey"},
    {"id":"5", "type":"chess"},
    {"id":"6", "type":"rugby"},
    {"id":"7", "type":"table tennis"},
    {"id":"8", "type":"lowntennis"},
    {"id":"9", "type":"badminton"},
    {"id":"10", "type":"basketball"},
    {"id":"11", "type":"shortrun"},
    {"id":"12", "type":"relay"}
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={sport}
        renderItem={({ item }) => {
          return (
            <View key={item.id} style={styles.item}>
              <Image source={item.image} style={styles.image} />
              <Text style={styles.text}>{item.type}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16
  },
  image: {
    width: 24,
    height: 24,
    marginRight: 8
  },
  text: {
    color: 'white',
    fontSize: 16
  }
});

export default chitchat;