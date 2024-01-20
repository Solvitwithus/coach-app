import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Chessi = () => {
  const navigation = useNavigation();

  const handleItemPress = (itemId) => {
    if (itemId === '0') {
      navigation.navigate('Reymasterio Amigo');
    }
    else if (itemId === '1') {
      navigation.navigate('Alice Mwehaki');
    }
    else if (itemId === '2') {
      navigation.navigate('Ariel Kibet');
    }
    else if (itemId === '3') {
      navigation.navigate('Alfons Alred');
    }
    else 
     {
      navigation.navigate('Janelle Jameper');
    }

  };

  const chessData = [
    {"id": "0", "type": "Reymasterio Amigo", image: require('./Assets/amigo.jpg') },
    { "id": "1", "type":"Alice Mwehaki", image: require('./Assets/alice.jpg') },
  ];

  const chessData1 = [
    { "id": "2", "type":"Ariel Kibet", image: require('./Assets/ariel.jpg') },
    {"id": "3", "type": "Alfons Alred", image: require('./Assets/nigga.jpg') },
  ];

  const chessData2 = [
    { "id": "4", "type": "Janelle Jameper", image: require('./Assets/jenelle.jpg') },
  ];

  return (
    <View style ={styles.Container}>
      <FlatList
        data={chessData}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item.id)}>
            <View key={item.id} style={styles.container}>
              <Text style={styles.text}>{item.type}</Text>
              <Image source={item.image} style={styles.image} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      <FlatList
        data={chessData1}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item.id)}>
            <View key={item.id} style={styles.container}>
              <Text style={styles.text}>{item.type}</Text>
              <Image source={item.image} style={styles.image} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />

      <FlatList
        data={chessData2}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item.id)}>
            <View key={item.id} style={styles.container}>
              <Text style={styles.text}>{item.type}</Text>
              <Image source={item.image} style={styles.image} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
    alignItems: 'center',
    backgroundColor:'green',
    width:180,
    borderRadius:10,
    height:180
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
  },
  image: {
    width: '100%',
    height: '100%',
    marginTop: 5,
  },
  Container:{
    backgroundColor:'#aaaaaa',
    flex:1
  }
});

export default Chessi;