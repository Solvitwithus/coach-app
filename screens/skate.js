import React,{useState} from 'react';
import {View,Text,StyleSheet,FlatList,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Skate = () => {

    const handlepress =(itemId) => {
          if (itemId === '0'){
               navigation.navigate('Joan Wayua')
          }

          else  if (itemId === '1'){
            navigation.navigate('John Mwangi')
       }

       else  if (itemId === '2'){
        navigation.navigate('Emmanuel Albert')
   }

   else  if (itemId === '3'){
    navigation.navigate('Lyne Ngugi')
}

else  if (itemId === '4'){
    navigation.navigate('Luisa Clarissa')
}
else  {
    navigation.navigate('Yvette Obura')
}
    }

const navigation = useNavigation()

const [skate,setskate] = useState([
    {"id":"0","type":"Joan Wayua",image:require('./Assets/joan.jpg')},
    {"id":"1","type":"John Mwangi",image:require('./Assets/jn.jpg')},
])


const [skate1,setskate1] = useState([
    {"id":"2","type":"Emmanuel Albert",image:require('./Assets/john.jpg')},
    {"id":"3","type":"Lyne Ngugi",image:require('./Assets/lynn.jpg')},
])

const [skate2,setskate2] = useState([
    {"id":"4","type":"Luisa Clarissa",image:require('./Assets/mik.jpg')},
    {"id":"5","type":"Yvette Obura",image:require('./Assets/bb.jpg')},
])


    return(
        <View>
            <FlatList
            data={skate}
            horizontal={true}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>handlepress(item.id)}>
                    <View key={item.id} style={styles.itcont}>
                       <Text style= {styles.text}> {item.type}</Text>
                       <Image source ={item.image} style={styles.image}/>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            />
                  <FlatList
            data={skate1}
            horizontal={true}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>handlepress(item.id)}>
                    <View key={item.id} style={styles.itcont}>
                       <Text style= {styles.text}> {item.type}</Text>
                       <Image source ={item.image} style={styles.image}/>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            />
                  <FlatList
            data={skate2}
            horizontal={true}
            renderItem={({item})=>(
                <TouchableOpacity onPress={()=>handlepress(item.id)}>
                    <View key={item.id} style={styles.itcont}>
                       <Text style= {styles.text}> {item.type}</Text>
                       <Image source ={item.image} style={styles.image}/>
                    </View>
                </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
image:{
    height:200,
    width:185,
    
},
text: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    color:'#222222'
},
itcont:{
backgroundColor:'green',
margin:5,
width:190,
height:245,
borderRadius:10
}
})

export default Skate;