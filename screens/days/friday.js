import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput,Alert} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';

const Friday = () => {
  const navigation = useNavigation();

  const handlesubmit = () => {
    navigation.navigate('Payment');
    Alert.alert(`You have selected ${selectedSport} - ${selectedUnit} coach: ${chess}, ${tennis}, ${swim}, ${skate}`);
  };
  const handlethepress = (itemId) => {
    if(itemId === '0'){
      navigation.navigate('Appointment');
    }
    else if(itemId === '1'){
      navigation.navigate('Tue');
    }
    else if(itemId === '2'){
      navigation.navigate('wed');
    }
    else if(itemId === '3'){
      navigation.navigate('thur');
    }
   
    else if(itemId === '5'){
      navigation.navigate('sat');
    }
    else if(itemId === '6'){
      navigation.navigate('sun');
    }
  };

  const [date, setdate] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState('');

  const [showDatePicker, setShowDatePicker] = useState(false);

  const handledate = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setdate(currentDate);
    const formatted = currentDate.toDateString(); // Format the date as desired
    setFormattedDate(formatted);
  };

  const [day, setday] = useState([
    { id: '0', type: 'Mon' },
    { id: '1', type: 'Tue' },
    { id: '2', type: 'Wed' },
    { id: '3', type: 'Thur' },
    { id: '4', type: 'Fri' },
    { id: '5', type: 'Sat' },
    { id: '6', type: 'Sun' },
  ]);

  const handlePickerOpen = () => {
    setShowDatePicker(true);
  };



  const [selectedSport, setSelectedSport] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');
  const [chess,setchess] = useState('');
  const [tennis,settennis] = useState('');
  const [swim,setswim] = useState('');
  const [skate,setskate] = useState('');

  const handleSportChange = (value) => {
    setSelectedSport(value);
  };

  const handleUnitChange = (value) => {
    setSelectedUnit(value);
  };

const handleswim = (value) => {
  setswim(value)
}

const handletennis = (value) => {
  settennis(value);
}

const handlechess = (value) => {
  setchess(value)
}

const handleskate = (value) => {
  setskate(value)
}


  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={day}
          horizontal={true}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => handlethepress(item.id)}>
              <View
        style={[
          styles.innercont,
          item.id === '4' ? styles.selectedInnerCont : null,
        ]}
        key={item.id}
      >
                <Text style={styles.innertext}>{item.type}</Text>
                <Icon name="sunny" size={45} color="gold" style={{ alignSelf: 'center' }} />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>

      <Text style={styles.text}>Friday Appointment</Text>
      <View>
        <TouchableOpacity onPress={handlePickerOpen}>
          <TextInput
            placeholder='select your date'
            style={styles.input}
            value={formattedDate} // Use the formatted date here
            placeholderTextColor={'black'}
            editable={false}
          />
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            mode="date"
            display="spinner"
            value={date}
            onChange={handledate}
          />
        )}
       
      </View>
      <View style ={{flexDirection:'row',backgroundColor:'grey',width:'96%',borderRadius:13,alignSelf:'center',height:80}}>
<Icon name ="timer" size={40} color={'white'} style ={{padding:20}}/>
<Text style={{color:'#333333',fontWeight:'bold' , fontSize:25,paddingTop:20}}>0600 hrs ~ 1800 hrs</Text>
      </View>
      <Text style={styles.texti}>Select Coach</Text>
      <View style ={styles.cont}>
        
      <Text style={styles.label}>Football:</Text>
     
      <Picker
        selectedValue={selectedSport}
        onValueChange={handleSportChange}
        style={styles.picker}
      >
        <Picker.Item label="Select an option" value="" />
        <Picker.Item label="Alexander Fargason" value="Alexander Fargason" />
        <Picker.Item label="Austine Monari" value="Austine Monari" />
        <Picker.Item label="Baxtone Lore" value="Baxtone Lore" />
        <Picker.Item label="Banice Lozo" value="Banice Lozo" />
        <Picker.Item label="Caltone Waihiga" value="Caltone Waihiga" />
        <Picker.Item label="Derrick Wafula" value="Derrick Wafula" />
        <Picker.Item label="Derrick Wafula" value="Derrick Wafula" />
        <Picker.Item label="Edwin Naitore" value="Edwin Naitore" />
        <Picker.Item label="Ethens Ignatius" value="Ethens Ignatius" />
        <Picker.Item label="Godwin Ngigi" value="Godwin Ngigi" />
        <Picker.Item label="Hashim Shaffi" value="Hashim Shaffi" />
        <Picker.Item label="Irene Jerotich" value="Irene Jerotich" />
        <Picker.Item label="Joel Waltone" value="Joel Waltone" />
        <Picker.Item label="Kerio Kerich" value="Kerio Kerich" />
        <Picker.Item label="Zachariah Alex" value="Zachariah Alex" />
        <Picker.Item label="ZAndu Zalendo" value="ZAndu Zalendo" />
        <Picker.Item label="Zun Zan" value="Zun Zan" />
      </Picker>
   
      <Text style={styles.labeli}>Basket Ball:</Text>
      <Picker
        selectedValue={selectedUnit}
        onValueChange={handleUnitChange}
        style={styles.picker}
      >
      <Picker.Item label="Select an option" value="" />
        <Picker.Item label="Alexina Andres" value="Alexina Andres" />
        <Picker.Item label="Berlin Bern" value="Berlin Bern" />
        <Picker.Item label="Austo Lorn" value="Austo Lorn" />
        <Picker.Item label="Ozil Ozz" value="Ozil Ozz" />
        <Picker.Item label="Linzi Ouma" value="Linzi Ouma" />
        <Picker.Item label="Oscar Nzamalu" value="Oscar Nzamalu" />
        <Picker.Item label="Sammy Okuro" value="Sammy Okuro" />
        <Picker.Item label="Lina Zai" value="Lina Zai" />
        <Picker.Item label="Riana Ozi" value="Riana Ozi" />
        <Picker.Item label="Ajuot Ajuor" value="Ajuot Ajuor" />
      </Picker>
      </View>
      <View style ={styles.cont}>
        <Text style={styles.label}>Chess</Text>
        <Picker
        selectedValue={chess}
        onValueChange={handlechess}
        style={styles.picker}
        >
          <Picker.Item label="Select an option" value="" />
<Picker.Item  label="Reymastirio Amigo" value="Reymastirio Amigo"/>
<Picker.Item  label="Alice Mwehaki" value="Alice Mwehaki"/>
<Picker.Item  label="Ariel Kibet" value="Ariel Kibet"/>
<Picker.Item  label="Alfons Alfred" value="Alfons Alfred"/>
<Picker.Item  label="Janelle Jamapelle" value="Janelle Jamapelle"/>
        </Picker>
        <Text style={styles.labelii}>Lawntennis</Text>
        <Picker
        onValueChange={handletennis}
        selectedValue={tennis}
        style={styles.picker}
        >
          <Picker.Item label="Select an option" value="" />
<Picker.Item  label="Felix Maina" value="Felix Maina"/>
<Picker.Item  label="Alvara Yego" value="Alvara Yego"/>
<Picker.Item  label="Marteen Austago" value="Marteen Austago"/>
<Picker.Item  label="Kelly Mavo" value="Felix Maina"/>
<Picker.Item  label="Janice Jeruto" value="Janice Jeruto"/>
<Picker.Item  label="Maxeen Nzioki" value="Maxeen Nzioki"/>
<Picker.Item  label="Serena William" value="Serena William"/>
<Picker.Item  label="Zimmermann Luxemberg" value="Zimmermann Luxemberg"/>
        </Picker>
      </View>

      <View style ={styles.cont}>
        <Text style={styles.label}>Swiming</Text>

        <Picker
        selectedValue={swim}
        onValueChange={handleswim}
        style={styles.picker}
        >
          <Picker.Item label="Select an option" value="" />
<Picker.Item  label="Selena Gomez" value="Selena Gomez"/>
<Picker.Item  label="Ronald Ogulu" value="Ronald Ogulu"/>
<Picker.Item  label="Emmanuel Role" value="Emmanuel Role"/>
<Picker.Item  label="Prudence Navy" value="Prudence Navy"/>
<Picker.Item  label="Espar Kibet" value="Espar Kibet"/>
<Picker.Item  label="Ivy Wangari" value="Ivy Wangari"/>
        </Picker>
        <Text style={styles.labeli}>Skate</Text>
        <Picker
         style={styles.picker}
         selectedValue={skate}
         onValueChange={handleskate}
        >
          <Picker.Item label="Select an option" value="" />
<Picker.Item  label="Joan Wayua" value="Joan Wayua"/>
<Picker.Item  label="John Mwangi" value="John Mwangi"/>
<Picker.Item  label="Emmanuel Albert" value="Emmanuel Albert"/>
<Picker.Item  label="Lynne Ngugi" value="Lynne Ngugi"/>
<Picker.Item  label="Luisa Clarissa" value="Luisa Clarissa"/>
<Picker.Item  label="Yvette Obura" value="Yvette Obura"/>
        </Picker>
      </View>
      <Text style ={{color:'black',fontSize:18,position:'absolute',paddingTop:590,paddingLeft:5}}>Enter{'\n'}Duration:</Text>
      <View style ={styles.timer}>
<TextInput
placeholder='Hrs'
placeholderTextColor={'pink'}
keyboardType='numeric'
style ={{paddingLeft:80}}
/>
<TextInput
placeholder='Min'
placeholderTextColor={'pink'}
keyboardType='numeric'
style ={{paddingLeft:10}}
/>
<TextInput
placeholder='Sec'
placeholderTextColor={'pink'}
keyboardType='numeric'
style ={{paddingLeft:10}}
/>
      </View>

      <Text style ={{color:'black',fontSize:18,position:'absolute',paddingTop:650,paddingLeft:5}}>Start{'\n'}Time:</Text>
      <View style ={styles.timer}>
<TextInput
placeholder='Hrs'
placeholderTextColor={'pink'}
keyboardType='numeric'
style ={{paddingLeft:80}}
/>
<TextInput
placeholder='Min'
placeholderTextColor={'pink'}
keyboardType='numeric'
style ={{paddingLeft:10}}
/>
<TextInput
placeholder='Sec'
placeholderTextColor={'pink'}
keyboardType='numeric'
style ={{paddingLeft:10}}
/>
      </View>

      <TouchableOpacity
  style={{ backgroundColor: '#df0000', padding: 10, borderRadius: 20,marginTop:20,width:'70%',alignSelf:'center' }}
  onPress={handlesubmit}
>
  <Text style={{ color: 'white', textAlign: 'center' }}>Press to proceed</Text>
</TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444444',
    flex: 1,
  },
  innercont: {
    backgroundColor: '#df0000',
    margin: 5,
    width: 70,
    height: 100,
    borderRadius: 15,
  },
  innertext: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 10,
    textAlign: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    alignSelf: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingTop:10
  },
  texti: {
    color: 'black',
    fontSize: 24,
    alignSelf: 'center',
    fontWeight: 'bold',
    padding:15,
  },
  input: {
    backgroundColor: 'grey',
    color:'white',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  selectedInnerCont: {
    backgroundColor: 'grey',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black',
    paddingLeft:10,
    paddingTop:20
  },
  labeli: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black',
    paddingLeft:10,
    paddingTop:20
   
  },
  labelii: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black',
    paddingLeft:30,
    paddingTop:20
   
  },
  picker: {
    height: 50,
    width: '30%',
    marginBottom: 20,
    color:'black'
  },
  cont:{
    flexDirection:'row',
    backgroundColor:'grey'
  },
  timer:{
    backgroundColor:'grey',
    marginTop:20,
    flexDirection:'row',
    width:'60%',
    marginLeft:80,
    height:35
  }
});

export default Friday;