import React,{useState} from 'react';
import {View,StyleSheet,Text,FlatList,TouchableOpacity,Image} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Lawntennis = () =>{
    const navigation = useNavigation()
const handleItemPress = (itemId) => {
if(itemId==='0'){
    navigation.navigate('Alvara Yego')
}
else if (itemId === '1') {
    navigation.navigate('Marteen Austago');
  }
  else if (itemId === '2') {
    navigation.navigate('kelly Mavo');
  }
  else if (itemId === '3') {
    navigation.navigate('Felix Maina');
  }
  else if (itemId === '4') {
    navigation.navigate('Janice Jeruto');
  }
  else if (itemId === '5') {
    navigation.navigate('Maxeen nzioki');
  }
  else if (itemId === '6') {
    navigation.navigate('Serena Williams');
  }
  else {
    navigation.navigate('Zimmermann Luxemberg');
  }
}

const [lawn,setlawn] = useState([
    {"id":"0","type":"Alvara Yego",image: require('./Assets/ein.jpg')},
    {"id":"1","type":"Marteen Austago",image:require('./Assets/zwei.jpg')}
])

const [lawn1,setlawn1] = useState([
    {"id":"2","type":"kelly Mavo",image: require('./Assets/lole.jpg')},
    {"id":"3","type":"Felix Maina",image:require('./Assets/Cal.jpg')}
])

const [lawn2,setlawn2] = useState([
    {"id":"4","type":"Janice Jeruto",image: require('./Assets/sel.jpg')},
    {"id":"5","type":"Maxeen nzioki",image:require('./Assets/aa.jpg')}
])


const [lawn3,setlawn3] = useState([
    {"id":"6","type":"Serena Williams",image: require('./Assets/ser.jpg')},
    {"id":"7","type":"Zimmermann Luxemberg",image:require('./Assets/kal.jpg')}
])
    return(
        <View style = {styles.container}>

<FlatList
data={lawn}
horizontal={true}
renderItem={({item})=>(
    <TouchableOpacity onPress={()=>handleItemPress(item.id)}>
    <View key={item.id} style={styles.imcont}>

<Image source={item.image} style={styles.image}/>
<Text style ={styles.text}>{item.type}</Text>
    </View>
    </TouchableOpacity>
)}
keyExtractor={(item) => item.id}
/>
<FlatList
data={lawn1}
horizontal={true}
renderItem={({item})=>(
    <TouchableOpacity onPress={()=>handleItemPress(item.id)}>
    <View key={item.id} style={styles.imcont}>

<Image source={item.image} style={styles.image} />
<Text style ={styles.text}>{item.type}</Text>
    </View>
    </TouchableOpacity>
)}
keyExtractor={(item) => item.id}
/>
<FlatList
data={lawn2}
horizontal={true}
renderItem={({item})=>(
    <TouchableOpacity onPress={()=>handleItemPress(item.id)}>
    <View key={item.id} style={styles.imcont}>

<Image source={item.image} style={styles.image}/>
<Text style ={styles.text}>{item.type}</Text>
    </View>
    </TouchableOpacity>
)}
keyExtractor={(item) => item.id}
/>
<FlatList
data={lawn3}
horizontal={true}
renderItem={({item})=>(
    <TouchableOpacity onPress={()=>handleItemPress(item.id)}>
    <View key={item.id} style={styles.imcont}>

<Image source={item.image} style={styles.image}/>
<Text style ={styles.text}>{item.type}</Text>
    </View>
    </TouchableOpacity>
)}
keyExtractor={(item) => item.id}
/>
        </View>
    )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:'#aaaaaa',
},
imcont:{
    backgroundColor:'green',
    height:155,
    width:190,
    margin:2.5
},
image:{
    height:'100%',
    width:'100%'
},
text:{
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
}
})

export default Lawntennis;