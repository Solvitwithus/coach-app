import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking ,Alert} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native';
const sammy = () => {

  const navigation = useNavigation()

  const handlenextscreen = () => {
    navigation.navigate('Appointment')
  }
  const phoneNumber = '+254 76544568'; 
 
  const handlePhoneCall = () => {
    const phoneUrl = `tel:${phoneNumber}`;
    Linking.canOpenURL(phoneUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(phoneUrl);
        }
        throw new Error(`Phone call not supported for number: ${phoneNumber}`);
      })
      
  };
  const handleMapNavigation = () => {
    const latitude = '7.04297';
    const longitude = '30.728516';
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;
  
    const androidGoogleMapsAppUrl = `geo:${latitude},${longitude}?q=${latitude},${longitude}`;
  
    Linking.canOpenURL(androidGoogleMapsAppUrl)
      .then((supported) => {
        if (supported) {
          return Linking.openURL(androidGoogleMapsAppUrl);
        }
        throw new Error(`Google Maps app not installed`);
      })
      .catch((error) => {
        console.log(error);
        // Handle error opening Google Maps app
        // Fallback to opening maps using the URL
        Linking.openURL(googleMapsUrl);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image source={require('./Assets/Ouko.jpg')} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.header}>Basketball Trainer</Text>
          <Text style={styles.headerrate}>Rating:</Text>
          <View style={styles.ratingContainer}>
            <Icon name="star" size={20} color="gold" />
            <Icon name="star" size={20} color="gold" />
            <Icon name="star" size={20} color="gold" />
            <Icon name="star" size={20} color="gold" />
            <Icon name="star-half" size={20} color="gold" />
            <Icon name="star-border" size={20} color="gold" />
          </View>
        </View>
      </View>
      <View style={styles.phonecont}>
        <View>
        <Text style={styles.header}>Phone Number</Text>
      <TouchableOpacity onPress={handlePhoneCall}>
        <Text style={styles.phoneNumber}>{phoneNumber}</Text>
      </TouchableOpacity>
      </View>
    
      <TouchableOpacity onPress={handlePhoneCall}>
      <Icon name="phone" size={20} color="white" style={{backgroundColor:'red',height:30,width:30,paddingLeft:5,paddingTop:5,marginLeft:180,marginTop:20}} />
      </TouchableOpacity>
      </View>
      <View style ={{borderColor:'black',borderWidth:1,width:'96%',marginLeft:10,marginTop:15}}/>
      
      <Text style ={{color:'black',fontWeight:'bold',fontSize:18,marginTop:10}}>About Us</Text>
      <Text style ={{color:'#222222',fontSize:16,marginLeft:5,marginTop:10}}>Trainer Sammy</Text>

      <View style ={{borderColor:'black',borderWidth:1,width:'96%',marginLeft:10,marginTop:15}}/>

      <View style = {styles.mapcon}>
        <View>
            <Text style={styles.headermap}>Location</Text>
      <TouchableOpacity onPress={handleMapNavigation} style={styles.mapLink}>
        <Text style={styles.phoneNumber}>Open in Google Maps</Text>
      </TouchableOpacity>
      
      </View>
      <TouchableOpacity  onPress={handleMapNavigation}>
      <Icon name="location-on" size={20} color="white" style={{backgroundColor:'red',height:30,width:30,paddingLeft:5,paddingTop:5,marginLeft:155,marginTop:20}} />
      </TouchableOpacity>
      </View>
      <View style ={{borderColor:'black',borderWidth:1,width:'96%',marginLeft:10,marginTop:15}}/>

      <TouchableOpacity onPress={handlenextscreen}>
      <View style={styles.timer}>
       
      <Icon name="timer" size={30} color="brown" style={{marginTop:20,marginLeft:40}} />
      <Text style ={styles.katext}>Book Appointment now</Text>
      <Icon name="event" color="brown" size={30}  style={{marginTop:20,marginLeft:30}}/>
     
      </View>
      <Text style={styles.hor}>24 HRS</Text>
      </TouchableOpacity>

      
      <Text style ={{color:'black',fontWeight:'bold',fontSize:18,marginTop:10}}>Services</Text>
      <Text style ={{color:'#222222',fontSize:16,marginLeft:5,marginTop:10}}>New test</Text>
      <Text style ={{color:'black',fontWeight:'bold',fontSize:18,marginTop:10}}>Coach</Text>
      <Text style ={{color:'#222222',fontSize:16,marginLeft:5,marginTop:10}}>New test</Text>
      </View>
   
  );
}

const styles = StyleSheet.create({
    hor:{
        color:'#333333',
        fontSize:18,
        fontWeight:'bold',
        marginLeft:120,
        marginTop:10
    },
    katext:{
        marginTop:24,marginLeft:30
,fontSize:18
    },
    timer:{
        flexDirection:'row',
    },
  image: {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    borderColor: 'gold',
    resizeMode: 'cover',
    borderWidth: 2,
    backgroundColor: 'red',
    marginTop: 7,
  },
  container: {
    backgroundColor: '#aaaaaa',
    flex: 1,
  },headermap:{
    color:'#333333',
    marginLeft:5,
    fontWeight:'bold',
    fontSize:20,
  },
  profile: {
    flex: 0.45,
    backgroundColor: '#cccccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  textContainer: {
    marginLeft: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingTop: 10,
    color: '#333333',
  },
  headerrate: {
    color: '#222222',
    fontSize: 20,
    fontWeight: 'bold',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  phoneNumber: {
    fontSize: 16,
    color: 'black',
    marginLeft:10,
    marginTop: 10,
  },
  phonecont:{
    flexDirection:'row',
    marginTop:15
  },
 mapcon:{
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
 }
});


export default sammy;