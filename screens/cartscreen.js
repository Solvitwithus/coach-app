import React, { useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';
const Couches = () => {
  const [selectedSport, setSelectedSport] = useState('');
  const [selectedUnit, setSelectedUnit] = useState('');

  const handleSportChange = (value) => {
    setSelectedSport(value);
  };

  const handleUnitChange = (value) => {
    setSelectedUnit(value);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Sport:</Text>
      <Picker
        selectedValue={selectedSport}
        onValueChange={handleSportChange}
        style={styles.picker}
      >
        <Picker.Item label="Football" value="football" />
        <Picker.Item label="Tennis" value="tennis" />
        <Picker.Item label="Chess" value="chess" />
        <Picker.Item label="Skate" value="skate" />
      </Picker>

      <Text style={styles.label}>Unit:</Text>
      <Picker
        selectedValue={selectedUnit}
        onValueChange={handleUnitChange}
        style={styles.picker}
      >
        <Picker.Item label="Computer" value="computer" />
        <Picker.Item label="Science" value="science" />
        <Picker.Item label="Maths" value="maths" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor:'black',
   
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  picker: {
    height: 50,
    width: '100%',
    marginBottom: 20,
  },
});

export default Couches;