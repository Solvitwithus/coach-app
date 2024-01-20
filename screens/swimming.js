import React ,{UseState} from 'react';
import {View,StyleSheet,Text,FlatList,Image,TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const Swimming = () => {

    const navigation = useNavigation();

    const handleItemPress =(itemId)=>{
        if (itemId ==='0'){
            navigation.navigate('Selena Gomez')
        }
        else if (itemId ==='1'){
            navigation.navigate('Ronald Ogulu')
        }
        else if (itemId ==='2'){
            navigation.navigate('Emmanuel Role')
        }
        else if (itemId ==='3'){
            navigation.navigate('Prudence Navy')
        }
        else if (itemId ==='4'){
            navigation.navigate('Espar Kibet')
        }
        else {
            navigation.navigate('Ivy Wangari')
        }
    }

    const [swim,setswim] = useState([
        {"id":"0", "type":"Selena Gomez",image:require('./Assets/sele.jpg')},
        {"id":"1", "type":"Ronald Ogulu",image:require('./Assets/coa.jpg')},

    ])

    
    const [swim1,setswim1] = useState([
        {"id":"2", "type":"Emmanuel Role",image:require('./Assets/role.jpg')},
        {"id":"3", "type":"Prudence Navy",image:require('./Assets/nav.jpg')},
        
    ])
    const [swim2,setswim2] = useState([
        {"id":"4", "type":"Espar Kibet",image:require('./Assets/esp.jpg')},
        {"id":"5", "type":"Ivy Wangari",image:require('./Assets/ivy.jpg')},
        
    ])
    return(
        <View style ={styles.container}>
            <FlatList
            data={swim}
            horizontal={true}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=>handleItemPress(item.id) }>
              <View key={item.id} style= {styles.itcon}>
                  <Text style ={styles.text}>{item.type}</Text>
                  <Image source ={item.image} style={styles.image}/>
              </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            />
             <FlatList
            data={swim1}
            horizontal={true}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=>handleItemPress(item.id) }>
              <View key={item.id} style= {styles.itcon}>
                  <Text style ={styles.text}>{item.type}</Text>
                  <Image source ={item.image} style={styles.image}/>
              </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            />
             <FlatList
            data={swim2}
            horizontal={true}
            renderItem={({item}) => (
                <TouchableOpacity onPress={()=>handleItemPress(item.id) }>
              <View key={item.id} style= {styles.itcon}>
                  <Text style ={styles.text}>{item.type}</Text>
                  <Image source ={item.image} style={styles.image}/>
              </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles= StyleSheet.create({
container:{
    backgroundColor:'#aaaaaa',
    flex:1,
  

},
image:{
    height:200,
    width:180,
    
},
itcon:{
    margin:2.5,
    backgroundColor:'green',
    width:185,
    height:230,
    borderBottomEndRadius:10,
    borderBottomStartRadius:10,
    padding:2
}
})

export default Swimming;