import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList,
  Image,
 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';


const Home = () => {

  const navigation = useNavigation();

  const handleItemPress = (itemId) => {
    if (itemId === '1') {
     
      navigation.navigate('football coaches');
  
    }
    else if (itemId==='2'){

      navigation.navigate('Basketball Coaches')
    
    }
    else if (itemId==='3'){

      navigation.navigate('Chess Coaches')
    
    }

    else if (itemId==='4'){

      navigation.navigate('LawnTennis Coaches')
    
    }
    else if (itemId==='5'){

      navigation.navigate('Swimming Coaches')
    
    }
    else{
      navigation.navigate('Skate Coaches')
    }
  };



  const [sport, setSport] = useState([
    { id: '1', type: 'football', image: require('./Assets/futa.png') },
    { id: '2', type: 'basket' ,image: require('./Assets/bake.png')},
    
    { id: '3', type: 'chess' ,image: require('./Assets/chess.png')}
   
   
  ]);


const [dersport,setdersport] = useState([
 
  { id: '4', type: 'LawnTennis' ,image: require('./Assets/lwn.png')},
  { id: '5', type: 'swimming' ,image: require('./Assets/swim.png')},
  { id: '6', type: 'skate' ,image: require('./Assets/skate.png')}
])

  return (
    <View style={styles.container1} >
      <View style={{ flex: 0.09, backgroundColor: 'red', position:'absolute',width:'100%' }}>
        <Text style={styles.welcome}>
          Welcome <Text style={styles.user}>User</Text>
        </Text>
        <StatusBar backgroundColor={'black'} />
        <View style={styles.cont1}>
          <TextInput
            placeholder="search here"
            placeholderTextColor={'black'}
            style={{
              borderColor: 'black',
              borderWidth: 1,
              marginBottom: 4,
              marginTop: 1,
              width: '80%',
              marginLeft: 8,
              height: 35,
              backgroundColor: 'white',
              color: 'black',
            }}
          />
          <Icon name="search" size={30} color={'black'} style={{ paddingTop: 5, paddingLeft: 15 }} />
        </View>
      </View>
      <View
        style={{
          backgroundColor: 'grey',
          marginLeft: 10,
          marginRight: 20,
          marginTop: 10,
          position: 'absolute',
          top: 70,
          left: 3,
          width: '95%',
          height:210
        }}
      >
        <Text style={{  fontStyle: 'italic', fontWeight: 'bold', fontSize: 23,color:'#333333' }}>SEARCH TRAINER FOR SPORT  </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 20,letterSpacing:2 ,color:'#444444'}}>NEARBY SORTED </Text>
        <Text style={{ fontWeight: 'bold', fontSize: 19,letterSpacing:1,color:'#555555' }}>BY SPECIALITY {'\n'}</Text>
        <Text>
          Discover a world of sports and fitness with {'\n'} Moov! Our app offers a wide range of expert {'\n'}
          trainers for various sports, all at affordable {'\n'} rates. Find trainers conveniently located {'\n'}
          near you and kickstart your fitness journey today
        </Text>

        <Image source={require('./Assets/OIP-removebg-preview.png')} style={styles.image} />
      </View>
      <View style={{ flexDirection: 'row', position: 'absolute', top: 300 }}>
        <TouchableOpacity>
          <Text style={{ color: 'black', marginLeft: 5 ,fontWeight:'bold',color:'#660000'}}>Nearby trainers</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={{ color: 'black', marginLeft: 170, fontWeight:'bold',color:'#660000' }}>see all</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.furat}>
  <FlatList 
    data={sport}
    horizontal={true}
    renderItem={({ item }) => (
      <TouchableOpacity  onPress={() => handleItemPress(item.id)}>
        <View key={item.id} style={styles.item}>
          <Text style={styles.itname}>{item.type}</Text>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id}
  />
</View>



<View style={styles.furat2}>
  <FlatList 
    data={dersport}
    horizontal={true}
    renderItem={({ item }) => (
      <TouchableOpacity  onPress={() => handleItemPress(item.id)}>
        <View key={item.id} style={styles.item}>
          <Text style={styles.itname}>{item.type}</Text>
          <Image source={item.image} style={styles.itemImage} />
        </View>
      </TouchableOpacity>
    )}
    keyExtractor={(item) => item.id}
  />
</View>

    </View>
  );
};

const styles = StyleSheet.create({
  container1: {
    backgroundColor: 'silver',
    flex: 1,
  },

  cont1: {
    flexDirection: 'row',
  },
  welcome: {
    fontSize: 15,
    marginLeft: 10,
    marginTop: 1,
    fontWeight: 'bold',
  },
  user: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 150,
    alignSelf: 'flex-end',
    position: 'absolute',
    top: 5,
    right: 0,
  },
  furat:{
    position:'absolute',
    top:350,
    height:200
  },
  furat2:{
    position:'absolute',
    top:570,
    height:400

   
  },
  item:{
  borderWidth:1,
  borderColor:'brown',
  height:190,
  padding:10,
  marginLeft:6,
  borderRadius:12,
  backgroundColor:'#00bb00'
  },
  itemImage:{
    height:130,
    width:120
  },
  itname:{
    fontSize:17,
    fontWeight:'bold',
    textAlign:'center',
    color:'black'
  }
});

export default Home;