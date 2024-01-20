import React, { useState } from 'react';
import { Text, View,ScrollView, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Bake = () => {
  const navigation = useNavigation();

  const handleItemPress = (itemId) => {
    if (itemId === '0') {
      navigation.navigate('Alexina Andre');
    }
    else if(itemId === '1')
      {
        navigation.navigate('Berlin Bern');
      }
      else if(itemId === '2')
      {
        navigation.navigate('Austo Lorn');
      }
      else if(itemId === '3')
      {
        navigation.navigate('ozil Ooz');
      }
      else if(itemId === '4')
      {
        navigation.navigate('Linzi Ouma');
      }
      else if(itemId === '5')
      {
        navigation.navigate('Oscar Nzamalu');
      }
      else if(itemId === '6')
      {
        navigation.navigate('Sammy Okuro');
      }
      else if(itemId === '7')
      {
        navigation.navigate('Lina zai');
      }
      else if(itemId === '8')
      {
        navigation.navigate('Riana Ozi');
      }
      else 
      {
        navigation.navigate('Ajuot ajuor');
      }
  };

  const [bakeData, setBakeData] = useState([
    { "id": "0", "type": "Alexina Andres", image: require('./Assets/andre.jpg') },
    { "id": "1", "type": "Berlin Bern", image: require('./Assets/kimanini.jpg') },
]);

const[bake,setbake] = useState([
    { "id": "2", "type": "Austo Lorn", image: require('./Assets/onyango.jpg') },
    { "id": "3", "type": "ozil Ooz", image: require('./Assets/jaba.jpg') },
])

const[bake1,setbake1] = useState([
    { "id": "4", "type": "Linzi Ouma", image: require('./Assets/ouma.jpg') },
    { "id": "5", "type": "Oscar Nzamalu", image: require('./Assets/opel.jpg') },
])

   
const[bake2,setbake2] = useState([
    { "id": "6", "type": "Sammy Okuro", image: require('./Assets/Ouko.jpg') },
    { "id": "7", "type": "Lina zai", image: require('./Assets/zai.jpg') },
])
  
const[bake3,setbake3] = useState([
    { "id": "8", "type": "Riana Ozi", image: require('./Assets/riana.jpg') },
    { "id": "9", "type": "Ajuot ajuor", image: require('./Assets/oduor.jpg') },
  
])
    

  return (
    <ScrollView style ={{backgroundColor:'#aaaaaa'}}>
    <View>
      <FlatList
        data={bakeData}
        horizontal={true}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleItemPress(item.id)}>
            <View key={item.id} style={styles.item}>
              <Text style={styles.itemName}>{item.type}</Text>
              <Image source={item.image} style={styles.itemImage} />
            </View>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
     <View>
     <FlatList
     data={bake}
     horizontal={true}
     renderItem={({item}) => (
        <TouchableOpacity onPress={() => handleItemPress(item.id)}>
        <View key ={item.id} style={styles.item}>
        <Text style={styles.itemName}>{item.type}</Text>
              <Image source={item.image} style={styles.itemImage} />
        </View>
        </TouchableOpacity>
     )
       
     }
     />
   </View>
   <View>
     <FlatList
       data={bake1}
       horizontal={true}
       renderItem={({ item }) => (
         <TouchableOpacity onPress={() => handleItemPress(item.id)}>
           <View key={item.id} style={styles.item}>
             <Text style={styles.itemName}>{item.type}</Text>
             <Image source={item.image} style={styles.itemImage} />
           </View>
         </TouchableOpacity>
       )}
       keyExtractor={(item) => item.id}
     />
   </View>
   <View>
     <FlatList
       data={bake2}
       horizontal={true}
       renderItem={({ item }) => (
         <TouchableOpacity onPress={() => handleItemPress(item.id)}>
           <View key={item.id} style={styles.item}>
             <Text style={styles.itemName}>{item.type}</Text>
             <Image source={item.image} style={styles.itemImage} />
           </View>
         </TouchableOpacity>
       )}
       keyExtractor={(item) => item.id}
     />
   </View>
   <View>
     <FlatList
       data={bake3}
       horizontal={true}
       renderItem={({ item }) => (
         <TouchableOpacity onPress={() => handleItemPress(item.id)}>
           <View key={item.id} style={styles.item}>
             <Text style={styles.itemName}>{item.type}</Text>
             <Image source={item.image} style={styles.itemImage} />
           </View>
         </TouchableOpacity>
       )}
       keyExtractor={(item) => item.id}
     />
   </View>
   </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    margin: 5,
    alignItems: 'center',
    backgroundColor:'green',
    width:180,
    borderRadius:15,
    height:150
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color:'black'
  },
  itemImage: {
    width: '100%',
    height: 105,
    marginTop: 5,
  },
});

export default Bake;