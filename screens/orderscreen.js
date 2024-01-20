import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput ,Picker} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import DateTimePicker from '@react-native-community/datetimepicker';

const Appointment = () => {
  const navigation = useNavigation();
  const handlethepress = (itemId) => {};

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
          item.id === '0' ? styles.selectedInnerCont : null,
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

      <Text style={styles.text}>Monday Appointment</Text>
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
      <Text style={styles.text}>Select Coach</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#cccccc',
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
  
});

export default Appointment;